# WORKFLOWS.md

이 문서는 이 블로그에서 작업을 진행하는 표준 흐름을 정의한다.

## UI Change Workflow

1. `docs/DESIGN.md`와 `docs/FRONTEND.md`를 읽는다.
2. 변경할 페이지와 컴포넌트를 특정한다.
3. 실패 기준 또는 수동 시나리오를 적는다.
4. 작은 단위로 구현한다.
5. `pnpm run build`를 실행한다.
6. `pnpm run dev`로 화면을 확인한다.
7. 새 규칙이 생기면 문서에 반영한다.

## Content Change Workflow

1. 변경할 `content/**/index.mdx`를 찾는다.
2. frontmatter를 유지한다.
3. MDX 2에서 JSX로 오해될 수 있는 텍스트를 정리한다.
4. `pnpm run build`를 실행한다.

## Architecture Change Workflow

1. `ARCHITECTURE.md`를 먼저 업데이트하거나 변경 의도를 메모한다.
2. 현재 경계와 어긋나는지 확인한다.
3. 테스트 또는 빌드 실패 기준을 먼저 만든다.
4. 구현한다.
5. 문서와 코드가 같은 설명을 하도록 맞춘다.

## Suggested Agent Prompt Shape

```text
Goal:
- 무엇을 바꿀지 한 문장으로 설명.

Context:
- 관련 문서와 파일.

Constraints:
- 유지할 규칙.

TDD:
- 먼저 실패해야 하는 기준.

Verification:
- 실행할 명령과 확인할 페이지.
```

## Done Definition

- 코드가 빌드된다.
- 의도한 화면 또는 동작이 확인된다.
- 새 규칙이 문서화됐다.
- 다음 에이전트가 같은 맥락을 다시 추측하지 않아도 된다.
