# ARCHITECTURE.md

이 리포지토리는 Gatsby 5 기반 정적 블로그다. 목표는 사람이 직접 고치기 쉬운 블로그이면서, 에이전트가 구조를 읽고 안전하게 UI와 콘텐츠 시스템을 변경할 수 있는 실험장으로 유지하는 것이다.

## Runtime Dependencies

- React 런타임은 React 19 계열을 사용한다.
- head 메타데이터는 `react-helmet`이 아니라 Gatsby Head API와 `src/components/seo.tsx`를 사용한다.

## Runtime Shape

- Gatsby가 `content/` 아래 MDX 파일을 수집한다.
- `gatsby-node.ts`가 MDX 노드에 `fields.slug`를 추가한다.
- `gatsby-node.ts`가 각 글 페이지와 카테고리 페이지를 생성한다.
- `src/templates/post.tsx`는 개별 MDX 글을 렌더링한다.
- `src/templates/category.tsx`는 카테고리별 글 목록을 렌더링한다.
- `src/pages/*.tsx`는 고정 라우트를 제공한다.

## Source Layout

```text
content/
  <category>/<post-id>/index.mdx
src/
  components/
  pages/
  templates/
  styles/
  images/
gatsby-config.ts
gatsby-node.ts
tsconfig.json
```

## Data Model

각 MDX 글은 다음 frontmatter를 가진다.

```yaml
---
title: "글 제목"
date: "YYYY-MM-DD"
category: "category-name"
idx: "1"
---
```

- `title`: 목록과 상세 페이지 제목.
- `date`: 아카이브 그룹화, 표시 날짜, 아카이브 정렬 기준.
- `category`: 카테고리 페이지 생성 기준.
- `idx`: 목록 정렬 기준. 숫자 문자열로 유지한다. 아카이브에서는 같은 날짜 안의 보조 정렬 기준으로만 사용한다.

## Page Boundaries

- `src/pages/index.tsx`: 전체 글 목록과 페이지네이션.
- `src/pages/categories.tsx`: 실제 `frontmatter.category` 기준 카테고리 목록.
- `src/pages/archive.tsx`: 날짜별 아카이브.
- `src/pages/about.tsx`: 소개 페이지.
- `src/pages/links.tsx`: 링크 페이지.
- `src/pages/404.tsx`: Not Found 페이지.

## Component Boundaries

- `Layout`: 공통 레이아웃, 사이드바, 본문 영역 배치.
- `Seo`: 각 page/template의 `Head` export에서 사용하는 head 메타데이터.
- `Sidebar`: 프로필, 외부 링크, 주요 내비게이션.
- `ListCard`: 글 목록 카드.
- `PostCard`: 상세 글 카드와 MDX provider.
- `Pagination`: 클라이언트 상태 기반 페이지 이동.
- `Utterances`: 댓글 위젯 삽입.
- `CodeBlock`: MDX 코드블록 하이라이트.

## Styling Boundaries

- 전역 스타일은 `src/styles/global.css`에 둔다.
- 레이아웃 전체 구조는 `src/styles/layout.css`에 둔다.
- 컴포넌트별 스타일은 같은 이름의 CSS 파일에 둔다.
- 큰 UI 개편 시 먼저 `docs/DESIGN.md`의 의도를 업데이트한다.

## Architecture Rules

- 콘텐츠의 URL은 `gatsby-node.ts`의 `fields.slug` 생성 규칙에 따른다.
- 카테고리 경로는 `frontmatter.category`를 기준으로 한다. 디렉터리명과 다를 수 있다.
- 아카이브 페이지는 `frontmatter.date` 내림차순으로 연/월/일과 글 링크를 정렬한다. 같은 날짜의 글만 `idx` 내림차순을 보조 기준으로 사용한다.
- MDX 2 파서는 JSX처럼 보이는 텍스트를 엄격하게 해석한다. HTML 예시는 코드블록이나 inline code로 감싼다.
- 페이지 쿼리는 Gatsby 5 GraphQL 문법을 사용한다. 예: `sort: {frontmatter: {idx: DESC}}`.
- SEO 변경은 page/template의 `Head` export와 `src/components/seo.tsx`를 기준으로 한다.
- UI 변경은 컴포넌트 경계를 유지한다. 단순 스타일 변경을 데이터 계층으로 끌어올리지 않는다.
- 새 자동화나 검증은 `package.json` scripts에 명시하고 `docs/TESTING.md`에 기록한다.

## Future Architecture Targets

- `src/components`를 역할별로 정리한다.
- 시각 회귀 검증을 위한 브라우저 스크린샷 워크플로를 추가한다.
- 글 frontmatter 스키마 검증을 추가한다.
- 접근성 검증을 자동화한다.
