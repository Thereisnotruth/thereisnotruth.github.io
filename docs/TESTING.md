# TESTING.md

이 문서는 이 블로그에서 TDD를 적용하는 방법을 정의한다.

## Current State

현재 리포지토리는 `@playwright/test` 기반 repo-local E2E 테스트를 가진다. `pnpm run test:e2e`는 Gatsby dev server를 자동으로 띄우거나 이미 실행 중인 `http://localhost:8000`을 재사용한다.
TypeScript 소스 변경 후에는 `pnpm run typecheck`로 타입 오류를 먼저 확인한다.
정적 lint는 `pnpm run lint`로 실행하며, semicolon 사용은 에러로 처리한다.
Gatsby develop이 내부적으로 `eslint-config-react-app@6`을 사용하므로 ESLint는 7.x 호환 범위를 유지한다.

공통 sidebar blog 레이아웃과 홈 피드 변경은 `docs/PERSONAL_SIDEBAR_BLOG_TDD.md`의 요구사항과 Red 시나리오를 먼저 따른다.

## TDD Loop

### 1. Red

구현 전에 실패 기준을 먼저 만든다.

- 테스트 러너가 있으면 실패 테스트를 작성한다.
- 테스트 러너가 없으면 검증 가능한 수동 시나리오를 작성한다.
- UI 작업이면 확인할 화면, 뷰포트, 기대 레이아웃을 명시한다.
- 콘텐츠 파서 작업이면 깨지는 MDX 예시와 기대 렌더링을 명시한다.

### 2. Green

가장 작은 변경으로 실패 기준을 통과시킨다.

- 기존 구조를 먼저 따른다.
- 새 추상화는 중복이나 복잡도를 줄일 때만 만든다.
- 빌드가 깨지면 빌드 에러를 우선 해결한다.

### 3. Refactor

동작이 통과한 뒤 구조를 정리한다.

- 이름을 명확히 한다.
- 컴포넌트 경계를 정리한다.
- 반복되는 규칙은 문서나 스크립트로 남긴다.

## Minimum Checks

모든 코드 변경 후:

```bash
pnpm run lint
pnpm run typecheck
pnpm run build
```

반복 회귀 테스트:

```bash
pnpm run test:harness
pnpm run test:e2e
```

전체 테스트:

```bash
pnpm test
```

개발 서버 확인:

```bash
pnpm run dev
```

빌드 결과 확인:

```bash
pnpm run serve
```

## UI TDD

UI 변경은 다음 형식으로 시작한다.

```text
Scenario:
- Page: /
- Viewport: desktop 1440x900, mobile 390x844
- Before: current layout behavior
- Expected: changed layout behavior
- Regression risk: navigation, content readability, overflow
```

구현 후 확인한다.

- 홈 글 목록이 보인다.
- 포스트 상세가 보인다.
- 카테고리 목록과 카테고리 상세가 보인다.
- 아카이브가 보인다.
- 모바일에서 텍스트와 버튼이 겹치지 않는다.
- 사이드바 또는 내비게이션이 접근 가능하다.

## Content TDD

MDX 변경은 다음을 확인한다.

- frontmatter가 유지된다.
- JSX처럼 보이는 일반 텍스트는 code로 감싼다.
- HTML 예시는 코드블록으로 둔다.
- 이미지 상대 경로가 유지된다.
- `pnpm run build`가 통과한다.

## Future Test Targets

- frontmatter schema validation.
- pagination unit test.
- category generation integration test.
- visual screenshot regression for desktop and mobile.

## Playwright E2E

현재 Playwright smoke test 범위:

- `tests/layout.spec.ts`: desktop semantic layout, mobile horizontal overflow, mobile navigation.
- `tests/theme.spec.ts`: theme toggle, light/dark state, pagination active color transition.
- `tests/routes.spec.ts`: `/`, `/categories/`, `/archive/`, representative post detail route.
