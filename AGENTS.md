# AGENTS.md

이 파일은 에이전트가 이 리포지토리에서 작업할 때 처음 읽는 짧은 지도다. 세부 지식은 루트 문서와 `docs/` 아래 문서를 따른다.

## Repository Map

- `ARCHITECTURE.md`: Gatsby, MDX, 페이지 생성, 컴포넌트 경계.
- `docs/HARNESS_ENGINEERING.md`: 에이전트가 안정적으로 작업하기 위한 운영 원칙.
- `docs/TESTING.md`: TDD 루프와 현재 검증 명령.
- `docs/FRONTEND.md`: 레이아웃, UI, 접근성, 시각 검증 기준.
- `docs/DESIGN.md`: 블로그 디자인 취향과 변경 원칙.
- `docs/PERSONAL_SIDEBAR_BLOG_TDD.md`: Stitch sidebar blog 레이아웃 요구사항과 Red 시나리오.
- `docs/QUALITY_CHECKLIST.md`: 작업 완료 전 점검표.
- `docs/WORKFLOWS.md`: 일반 작업 흐름과 권장 프롬프트 분해 방식.

## Hard Rules

- 새 일반 파일 이름은 소문자 kebab-case로 작성한다.
- 새 Markdown 파일 이름은 대문자와 underscore를 사용한다. 예: `QUALITY_CHECKLIST.md`.
- npm 의존성 설치가 필요하면 패키지 매니저는 `pnpm`을 사용한다.
- 기존 사용자 변경을 되돌리지 않는다.
- UI 변경은 `pnpm run build`로 최소 검증한다.
- 동작 변경은 먼저 기대 동작을 문서, 테스트, 또는 체크리스트로 고정한 뒤 구현한다.

## Project Facts

- 프레임워크: Gatsby 5.
- 콘텐츠: `content/**/index.mdx`.
- 동적 페이지 생성: `gatsby-node.ts`.
- 주요 UI: `src/components`, `src/pages`, `src/templates`, `src/styles`.
- 개발 서버: `pnpm run dev`.
- 프로덕션 빌드: `pnpm run build`.

## Agent Operating Model

1. 먼저 관련 문서를 읽고 현재 코드 패턴을 확인한다.
2. 변경 전 실패 기준을 만든다. 테스트가 없으면 수동 검증 기준을 `docs/QUALITY_CHECKLIST.md`에 맞춘다.
3. 작은 단위로 구현한다.
4. 빌드, 린트 경고, 브라우저 확인, 스크린샷 확인 중 작업에 맞는 검증을 수행한다.
5. 새 규칙이나 반복되는 실수는 문서 또는 자동 검사로 승격한다.

## Escalation

- 네트워크, 패키지 설치, 홈 디렉터리 쓰기, 포트 바인딩 때문에 샌드박스 밖 실행이 필요할 수 있다.
- 승인 요청이 필요하면 목적을 짧고 구체적으로 설명한다.
