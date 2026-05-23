# QUALITY_CHECKLIST.md

작업 완료 전 이 체크리스트를 기준으로 확인한다.

## Build

- `pnpm install`이 필요한 경우 pnpm을 사용했다.
- TypeScript 변경 시 `pnpm run typecheck`가 통과한다.
- `pnpm run build`가 통과한다.
- Gatsby warning 중 새로 만든 warning이 없는지 확인했다.

## Content

- 새 Markdown 파일명은 대문자와 underscore를 사용했다.
- 새 일반 파일명은 소문자 kebab-case를 사용했다.
- MDX에서 HTML 예시는 코드블록이나 inline code로 감쌌다.
- frontmatter 필드가 유지된다.

## UI

- 홈, 글 상세, 카테고리, 아카이브 화면을 확인했다.
- 모바일에서 텍스트나 버튼이 겹치지 않는다.
- 링크 대상이 실제 존재한다.
- 외부 링크에는 `rel="noreferrer"`가 있다.

## TDD

- 변경 전 실패 기준이 있었다.
- 테스트가 없으면 수동 시나리오를 명시했다.
- 구현 후 동일 기준으로 검증했다.
- 리팩터링은 동작 통과 후 수행했다.

## Harness

- 새로 배운 규칙이 있으면 문서에 반영했다.
- 반복 가능한 검증은 script 또는 체크리스트 후보로 기록했다.
- 에이전트가 다음 작업에서 읽어야 할 정보가 리포지토리에 남아 있다.
