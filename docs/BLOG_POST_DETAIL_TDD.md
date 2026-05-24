# BLOG_POST_DETAIL_TDD.md

이 문서는 Stitch `Personal Sidebar Blog`의 `Blog Post Detail` 화면을 현재 Gatsby 포스트 상세 페이지에 적용하기 위한 요구사항과 실패 시나리오를 고정한다.

## Scope

이번 TDD 사이클의 범위는 포스트 상세 페이지의 article header, meta hierarchy, 본문 컨테이너, long-form typography다.

이번 사이클에 포함하지 않는 항목은 다음과 같다.

- 새 검색 기능.
- 태그 기능 신설.
- 소셜 공유 기능 신설.
- 원격 hero 이미지 도입.
- 댓글 시스템 변경.

## Design Source

기준 디자인은 Stitch 프로젝트 `Personal Sidebar Blog`다.

- Project ID: `959686572415851291`.
- Screen: `Blog Post Detail`.
- Screen ID: `68b69ff7a4de4e11a03c2e1763705f87`.
- Design system: `Serene Editorial`.

## Requirements

- 상세 페이지는 기존 sidebar layout shell을 유지한다.
- Article 최상단에는 홈으로 돌아가는 작은 back link가 있다.
- Article header는 중앙 정렬이며 category와 date를 uppercase label style로 표시한다.
- 글 제목은 editorial serif display hierarchy를 가진다.
- 본문은 약 `65ch` 폭으로 제한되어 긴 글의 line length를 안정화한다.
- 본문 문단은 `18px`, `1.7` line-height 수준의 long-form typography를 사용한다.
- 첫 문단에 자동 drop cap을 적용하지 않는다. MDX 글은 기호, 짧은 메모, 목록형 문장으로 시작할 수 있어 첫 글자 확대가 오히려 가독성을 해칠 수 있다.
- `blockquote`는 primary accent bar와 tonal background로 본문에서 구분된다.
- 본문 내 heading, list, image, code, table은 같은 semantic color token을 사용한다.
- 새 링크나 버튼은 실제 동작이 없으면 추가하지 않는다.

## Red Scenarios

| Scenario | Target | Status | Observation | Next Green Target |
| --- | --- | --- | --- | --- |
| Detail has Stitch article shell | representative post detail | 🟢 Green | `PostCard`가 back link, centered header, category/date meta rail, content wrapper를 렌더링한다. | 이후 상세 template 변경 중 article shell을 유지한다. |
| Detail body uses long-form prose scale | `src/styles/card.css` | 🟢 Green | 본문은 `18px`, `1.7`, `65ch` wrapper를 사용한다. | scale token 변경 시 하네스 테스트를 함께 수정한다. |
| Detail supports editorial rich text | `src/styles/card.css` | 🟢 Green | blockquote accent, heading rhythm, list marker, media, code, table 스타일을 추가했다. | MDX rich text 변경 시 상세 스타일 회귀를 확인한다. |
| Detail does not force automatic drop cap | `src/styles/card.css` | 🟢 Green | explicit opt-in 없는 `::first-letter` 스타일을 제거했다. | drop cap은 콘텐츠 구조가 보장될 때만 별도 opt-in으로 추가한다. |

## Green Observation

2026-05-24에 다음 검증을 통과했다.

- `pnpm run typecheck`.
- `pnpm run test:harness`.
- `pnpm run build`.

`localhost:8000` 개발 서버는 실행 중이 아니어서 브라우저 뷰포트 확인은 수행하지 않았다.

## Minimum Verification

구현 후 최소 검증 명령은 다음과 같다.

```bash
pnpm run typecheck
pnpm run test:harness
pnpm run build
```
