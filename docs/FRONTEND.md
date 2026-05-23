# FRONTEND.md

이 문서는 UI와 레이아웃 변경 기준을 정의한다.

## Product Shape

이 사이트는 개인 기술 블로그다. 첫 화면은 읽기와 탐색이 바로 가능해야 한다. 마케팅형 랜딩 페이지보다 글 목록, 카테고리, 아카이브, 포스트 읽기 경험이 우선이다.

## Layout Principles

- 콘텐츠 가독성을 최우선으로 한다.
- 내비게이션은 예측 가능해야 한다.
- 글 목록과 글 상세의 정보 계층을 분명히 한다.
- 모바일에서 사이드바와 본문이 충돌하지 않아야 한다.
- 카드 안에 다시 카드 구조를 넣지 않는다.
- 레이아웃 변화가 hover, loading, pagination 상태 때문에 흔들리지 않도록 stable dimension을 둔다.

## Component Ownership

- 레이아웃 골격: `src/components/layout.tsx`, `src/styles/layout.css`.
- 사이드바: `src/components/sidebar.tsx`, `src/styles/sidebar.css`.
- 글 목록 카드: `src/components/list-card.tsx`, `src/styles/list_card.css`.
- 포스트 상세 카드: `src/components/post-card.tsx`, `src/styles/card.css`.
- 페이지네이션: `src/components/pagination.tsx`, `src/styles/pagination.css`.
- SEO/head 메타데이터: 각 page/template의 `Head` export, `src/components/seo.tsx`.

## Accessibility

- 외부 링크에는 `rel="noreferrer"`를 둔다.
- 이미지에는 의미 있는 `alt`를 둔다. 장식 이미지는 빈 `alt`를 허용한다.
- 버튼은 실제 button 요소를 사용한다.
- 링크와 버튼의 클릭 영역은 모바일에서도 충분해야 한다.
- 텍스트와 배경 대비를 유지한다.

## Responsive Checks

UI 변경 후 최소 다음 뷰포트를 확인한다.

- Desktop: 1440x900.
- Tablet: 768x1024.
- Mobile: 390x844.

각 뷰포트에서 확인할 것:

- 본문이 가로 스크롤을 만들지 않는다.
- 제목과 날짜, 카테고리가 겹치지 않는다.
- 페이지네이션 버튼이 줄바꿈되어도 조작 가능하다.
- 사이드바 또는 내비게이션이 콘텐츠를 가리지 않는다.

## Visual Direction

이 블로그는 기술 메모장 성격이다. 지나치게 장식적인 히어로나 과한 그라디언트보다 조용하고 읽기 좋은 레이아웃을 우선한다.

허용되는 방향:

- 명확한 타이포그래피.
- 넓은 줄 간격.
- 낮은 채도의 배경.
- 필요한 곳에만 강조색.
- 코드블록 가독성 강화.

피할 것:

- 첫 화면을 랜딩 페이지처럼 만드는 것.
- 콘텐츠보다 장식이 먼저 보이는 것.
- 한 색상 계열만 과하게 반복하는 팔레트.
- 모바일에서 텍스트가 UI 요소 안에서 잘리는 구조.
