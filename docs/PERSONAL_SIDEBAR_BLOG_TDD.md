# PERSONAL_SIDEBAR_BLOG_TDD.md

이 문서는 Stitch `Personal Sidebar Blog` 디자인을 현재 Gatsby 블로그에 적용하기 전, 공통 레이아웃과 홈 피드의 요구사항과 실패 시나리오를 고정한다.

## Scope

이번 TDD 사이클의 범위는 다음 두 가지다.

- 공통 레이아웃: 모든 주요 페이지를 감싸는 sidebar + main content shell.
- 홈 피드: `/`에서 보이는 글 목록, 메타 정보, 탐색 흐름.

이번 사이클에 포함하지 않는 항목은 다음과 같다.

- 포스트 상세 본문 타이포그래피 전면 개편.
- 카테고리/아카이브 화면의 세부 디자인 개편.
- 다크 모드.
- 태그 기능 신설.
- 검색 기능.

## Design Source

기준 디자인은 Stitch 프로젝트 `Personal Sidebar Blog`다.

- Project ID: `959686572415851291`.
- Primary screen: `Blog Home - Feed`.
- Screen ID: `37e7e04eec7645d3a2c85a8796b32865`.
- Design system: `Serene Editorial`.

## Layout Requirements

### Desktop

- `/`는 좌측 sidebar와 우측 main content로 나뉜다.
- Sidebar는 author/profile, primary navigation, secondary metadata를 담는 고정 폭 영역이다.
- Sidebar의 목표 폭은 약 `280px`이며 main content와 명확한 gutter를 둔다.
- Main content는 글 목록을 담고, 지나치게 넓어져 읽기 어려운 line length가 되지 않는다.
- Sidebar와 main content는 서로 겹치지 않는다.
- 화면을 세로로 스크롤해도 주요 탐색은 예측 가능한 위치에 남아 있어야 한다.

### Tablet

- Sidebar와 main content는 사용 가능한 폭 안에서 충돌하지 않는다.
- 두 영역을 유지하기 어렵다면 sidebar를 main content 위로 이동할 수 있다.
- 본문, 글 제목, 날짜, 카테고리 텍스트가 겹치지 않는다.

### Mobile

- Sidebar는 본문을 밀어내거나 가리지 않아야 한다.
- 모바일에서는 sidebar 내용을 상단 profile/navigation 영역으로 재배치할 수 있다.
- 가로 스크롤이 없어야 한다.
- 링크와 버튼의 터치 영역은 조작 가능한 크기를 유지한다.

## Visual Requirements

- 전체 화면은 off-white paper 계열 배경을 사용한다.
- Primary accent는 sage 계열로 제한적으로 사용한다.
- 본문 주요 텍스트는 charcoal 계열로 충분한 대비를 유지한다.
- 제목 계층은 editorial serif 성격을 가진다.
- 본문과 utility text는 sans-serif 성격을 가진다.
- 카드형 장식보다 여백, 타이포그래피, 얇은 구분선으로 계층을 만든다.
- 큰 radius, 무거운 shadow, 과한 gradient를 사용하지 않는다.

## Home Feed Requirements

- 홈 피드는 글 목록을 즉시 보여준다.
- 각 글 항목은 제목, 날짜, 카테고리, 요약 또는 excerpt를 표시한다.
- 제목은 가장 강한 시각 계층을 가진다.
- 날짜와 카테고리는 보조 정보로 작고 안정적으로 배치한다.
- 글 항목 사이에는 충분한 수직 간격이나 얇은 구분선을 둔다.
- 글 제목 링크는 실제 포스트 상세 페이지로 이동한다.
- 카테고리 링크를 노출하는 경우 실제 존재하는 카테고리 페이지로 이동한다.
- 태그 기능이 구현되지 않은 상태에서는 tag 링크를 새로 노출하지 않는다.

## Accessibility Requirements

- 주요 콘텐츠 영역은 semantic `main` 역할을 가진다.
- Sidebar 또는 보조 탐색 영역은 semantic `aside`, `nav`, 또는 동등하게 탐색 가능한 구조를 가진다.
- 링크 텍스트는 목적지를 이해할 수 있어야 한다.
- 키보드 포커스가 보이지 않게 제거되면 안 된다.
- 텍스트와 배경 대비는 읽기 가능한 수준을 유지한다.

## Red Scenarios

아래 시나리오는 구현 전에 실패해야 한다. 현재 레이아웃이 Stitch sidebar editorial 구조가 아니면 Red 상태로 본다.

### Scenario 6: Home post selection opens readable detail content

- Page: `/`.
- Viewport: `1440x900`.
- Expected:
  - 홈 글 항목은 실제 post detail URL을 가리키는 명확한 제목 기반 링크다.
  - 첫 글을 선택하면 post detail template가 본문을 `article` 영역에 렌더링한다.
  - 상세 본문 컨테이너는 리스트 화면과 같은 editorial 폭을 유지한다.
- Current failure signal:
  - 링크 목적지가 불명확하거나 상세 본문이 일반 `div` 카드로만 렌더링되어 선택 후 읽기 흐름이 고정되지 않는다.

### Scenario 7: Screen scale matches Stitch editorial proportions

- Pages: `/`, 실제 post detail URL 하나.
- Viewport: `1440x900`.
- Expected:
  - Sidebar 목표 폭은 `256px` 수준이다.
  - Main content 최대 폭은 `760px` 수준이다.
  - 홈 글 제목은 `28px`, excerpt는 `16px` 수준으로 과하게 커 보이지 않는다.
- Current failure signal:
  - Sidebar `280px`, content `920px`, 홈 제목 `32px` 등으로 전체 화면이 Stitch 기준보다 크게 보인다.

### Scenario 8: Dark mode control is a compact top-right FAB

- Pages: all layout pages.
- Viewport: `1440x900`, `390x844`.
- Expected:
  - 다크모드 전환 버튼은 페이지 우측 상단에 고정된 작은 원형 FAB이다.
  - 버튼은 아이콘만 보이고 접근 가능한 `aria-label`을 유지한다.
  - Sidebar profile 영역의 세로 공간을 차지하지 않는다.
- Current failure signal:
  - 토글이 sidebar 내부의 넓은 텍스트 버튼으로 렌더링된다.

### Scenario 9: Sidebar icons follow semantic theme colors

- Pages: all layout pages.
- Viewport: `1440x900`.
- Expected:
  - Sidebar navigation/contact icons are colored by CSS semantic theme tokens.
  - Light/dark theme 전환 시 icon color가 `--color-*` 변수에 맞춰 바뀐다.
- Current failure signal:
  - SVG 이미지가 `StaticImage`와 opacity/invert filter에 의존해 theme color token을 직접 반영하지 못한다.

### Scenario 1: Desktop home has personal sidebar layout

- Page: `/`.
- Viewport: `1440x900`.
- Expected:
  - Author/profile 성격의 sidebar 영역이 보인다.
  - Sidebar와 main content가 두 열 구조로 배치된다.
  - Main content 안에 글 목록이 보인다.
  - Sidebar와 글 목록이 겹치지 않는다.
  - 화면 전체에 가로 스크롤이 생기지 않는다.
- Current failure signal:
  - Sidebar가 없거나, main content와 독립된 두 열 구조가 아니다.

### Scenario 2: Desktop home feed preserves readable editorial hierarchy

- Page: `/`.
- Viewport: `1440x900`.
- Expected:
  - 글 제목이 날짜, 카테고리, excerpt보다 강한 계층으로 보인다.
  - 글 항목 사이의 간격이 안정적이다.
  - 글 목록의 line length가 과도하게 길지 않다.
  - 글 제목 링크가 실제 상세 페이지로 이동한다.
- Current failure signal:
  - 글 목록은 보이지만 sidebar editorial layout 기준의 hierarchy와 spacing이 없다.

### Scenario 3: Mobile home does not keep desktop sidebar beside content

- Page: `/`.
- Viewport: `390x844`.
- Expected:
  - Sidebar가 main content 옆에 좁게 끼어 있지 않다.
  - Profile/navigation 정보가 본문 위 또는 접근 가능한 모바일 구조로 전환된다.
  - 글 제목, 날짜, 카테고리, excerpt가 서로 겹치지 않는다.
  - `document.documentElement.scrollWidth`가 viewport 너비를 초과하지 않는다.
- Current failure signal:
  - 데스크톱 sidebar가 그대로 남아 본문 폭을 압박하거나 가로 스크롤을 만든다.

### Scenario 4: Tablet home keeps navigation and content usable

- Page: `/`.
- Viewport: `768x1024`.
- Expected:
  - Navigation과 글 목록을 모두 사용할 수 있다.
  - Sidebar가 유지되더라도 본문이 읽기 어려울 정도로 좁아지지 않는다.
  - Sidebar가 접히거나 위로 이동하면 주요 navigation 링크가 사라지지 않는다.
- Current failure signal:
  - 중간 폭에서 sidebar와 main content가 충돌하거나 navigation 접근성이 사라진다.

### Scenario 5: Existing blog routes remain reachable after layout change

- Pages:
  - `/`.
  - `/categories/`.
  - `/archive/`.
  - 실제 post detail URL 하나.
- Viewport: `1440x900`.
- Expected:
  - 각 페이지가 HTTP error 없이 렌더링된다.
  - 공통 layout 변경 때문에 주요 링크가 사라지지 않는다.
  - 홈의 첫 번째 글 링크는 post detail로 이동한다.
- Current failure signal:
  - 홈만 바뀌고 기존 카테고리, 아카이브, 포스트 상세 이동이 깨진다.

## Current Red Observation

2026-05-24에 Codex browser 검증으로 현재 상태를 확인했다.

### Viewports

- Desktop: `1440x900`.
- Tablet: `768x1024`.
- Mobile: `390x844`.

### Status Legend

| Status | Meaning |
| --- | --- |
| 🔴 Red | 요구사항을 충족하지 못한다. |
| 🟡 Partial | 일부 조건은 충족하지만 핵심 요구사항이 남아 있다. |
| 🟢 Green | 현재 기준을 충족한다. |

### Scenario Checklist

| Scenario | Viewport | Status | Observation | Next Green Target |
| --- | --- | --- | --- | --- |
| Desktop home has personal sidebar layout | `1440x900` | 🟢 Green | `aside`, `nav`, `main`이 존재하고 sidebar는 `280px`, main은 오른쪽 content 영역으로 배치된다. | 이후 변경 중 semantic shell을 유지한다. |
| Desktop home feed preserves readable editorial hierarchy | `1440x900` | 🟢 Green | 홈 피드는 off-white background, serif title, thin divider, 여백 중심 구조로 렌더링된다. | 이후 포스트 상세와 카테고리 화면에도 같은 방향을 확장한다. |
| Mobile home does not keep desktop sidebar beside content | `390x844` | 🟢 Green | Sidebar가 본문 위 profile/navigation 영역으로 전환되고 horizontal overflow가 없다. | 모바일 navigation을 이후 자동 테스트 후보로 승격한다. |
| Tablet home keeps navigation and content usable | `768x1024` | 🟢 Green | Tablet에서 profile/navigation이 본문 위에 남고 글 목록도 접근 가능하다. | tablet breakpoint 회귀를 자동 테스트 후보로 기록한다. |
| Existing blog routes remain reachable after layout change | `1440x900` | 🟢 Green | `/`, `/categories/`, `/archive/`, `/devops/230105_devops_1/`가 404 없이 렌더링되고 첫 글 링크도 상세 페이지로 이동 가능하다. | 이후 layout 변경 중 이 상태를 유지한다. |
| Home post selection opens readable detail content | `1440x900` | 🟢 Green | 첫 글 링크는 `/devops/230105_devops_1/`이고 상세 페이지는 `article.post-card`와 `.post-card-body`에 본문을 렌더링한다. | 홈 링크와 상세 template 구조를 `test:harness`로 유지한다. |
| Screen scale matches Stitch editorial proportions | `1440x900` | 🟢 Green | Sidebar `256px`, content max `760px`, 홈 제목 `28px`로 조정됐다. | scale token 변경 시 `test:harness`와 렌더링 점검을 함께 수행한다. |
| Dark mode control is a compact top-right FAB | `1440x900`, `390x844` | 🟢 Green | 토글은 layout level의 fixed FAB이며 desktop `44px`, mobile `40px`로 렌더링된다. | 접근 가능한 icon-only button 상태를 유지한다. |
| Sidebar icons follow semantic theme colors | `1440x900` | 🟢 Green | Sidebar icons는 CSS mask와 `currentColor`로 렌더링되어 semantic color token을 따른다. | 새 sidebar icon도 같은 mask/currentColor 패턴을 사용한다. |

### Supporting Checks

| Check | Status | Observation |
| --- | --- | --- |
| `/` renders | 🟢 Green | 홈이 렌더링된다. |
| Desktop profile/sidebar area is visible | 🟢 Green | Desktop에서는 좌측 profile/sidebar와 우측 글 목록이 보인다. |
| Tablet profile/navigation remains accessible | 🟢 Green | Tablet에서는 profile/navigation이 본문 위에 남는다. |
| Mobile profile/navigation remains accessible | 🟢 Green | Mobile에서는 profile/navigation이 본문 위에 남는다. |
| Semantic `main`, `aside`, `nav` exist | 🟢 Green | 세 semantic 요소가 모두 존재한다. |
| No horizontal overflow | 🟢 Green | 확인한 세 viewport에서 `document.documentElement.scrollWidth`가 viewport 너비를 초과하지 않았다. |
| No unsupported `Tag` navigation | 🟢 Green | `Tag` 링크가 더 이상 노출되지 않는다. |
| Home first post link works | 🟢 Green | 첫 번째 글 링크는 `/devops/230105_devops_1/`로 확인됐다. |
| Static harness | 🟢 Green | `pnpm run test:harness`가 4개 세부 요구사항을 통과한다. |
| Built detail content | 🟢 Green | `public/devops/230105_devops_1/index.html` 기준 상세 본문 길이 5222자로 확인됐다. |

## Planned Harness

첫 구현 전에는 위 Red 시나리오를 기준으로 수동 검증한다.

이번 상세 수정 사이클은 정적 하네스 테스트로 승격한다.

```bash
pnpm run test:harness
```

2026-05-24 Red 확인:

- `home post selection exposes a direct titled detail link`: 실패.
- `stitch scale tokens keep the screen compact and readable`: 실패.
- `theme toggle is a small fixed top-right fab`: 실패.
- `sidebar icons inherit semantic theme colors`: 실패.

`@playwright/test`가 설치되어 있으므로, 레이아웃 기준이 안정되면 다음 자동 테스트로 승격한다.

- Desktop home sidebar smoke test.
- Mobile overflow smoke test.
- Existing routes smoke test.
- Home first post link navigation test.

## Minimum Verification

구현 후 최소 검증 명령은 다음과 같다.

```bash
pnpm run typecheck
pnpm run test:harness
pnpm run build
```

브라우저 검증은 다음 뷰포트에서 수행한다.

- Desktop: `1440x900`.
- Tablet: `768x1024`.
- Mobile: `390x844`.
