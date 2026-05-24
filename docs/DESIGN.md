# DESIGN.md

이 문서는 블로그 디자인 취향을 에이전트가 읽을 수 있도록 고정한다.

## Design Intent

`단서`는 기술 메모와 학습 기록을 담는 블로그다. 디자인은 글을 빠르게 훑고, 필요한 글로 이동하고, 긴 내용을 읽는 데 방해가 없어야 한다.

## Personality

- 조용함.
- 정돈됨.
- 개인적이지만 과하게 장식적이지 않음.
- 기술 노트에 맞는 실용성.

## Information Hierarchy

1. 글 제목.
2. 요약 또는 본문 시작.
3. 날짜.
4. 카테고리.
5. 보조 내비게이션.

## Color Rules

- 긴 본문 배경은 눈의 피로가 적어야 한다.
- 강조색은 링크, 활성 상태, 현재 페이지 정도에 제한한다.
- 코드블록은 본문과 명확히 구분되어야 한다.
- 단일 hue 계열로만 전체 화면을 구성하지 않는다.

## Theme Colors

Stitch `Personal Sidebar Blog`의 두 디자인 시스템을 기준으로 theme color를 정의한다.

- Light theme: `Serene Editorial`.
- Dark theme: `Serene Night`.
- 코드에서는 `src/styles/global.css`의 CSS custom properties를 기준으로 사용한다.
- 기본 theme는 light이며, dark theme는 `[data-theme="dark"]`에서 같은 변수 이름으로 재정의한다.
- 컴포넌트 CSS에서 직접 hex color를 반복하지 말고 semantic 변수인 `--color-*`를 사용한다.

| Token | Light: Serene Editorial | Dark: Serene Night | Usage |
| --- | --- | --- | --- |
| `--color-surface` | `#f9f9f7` | `#111412` | Page background |
| `--color-surface-container-lowest` | `#ffffff` | `#0c0f0c` | Raised content surfaces |
| `--color-surface-container-low` | `#f4f4f2` | `#191c1a` | Sidebar and subtle hover fills |
| `--color-surface-container` | `#eeeeec` | `#1d201e` | Interactive hover layers |
| `--color-surface-container-high` | `#e8e8e6` | `#272b28` | Input and control surfaces |
| `--color-surface-container-highest` | `#e2e3e1` | `#323632` | Tags and compact tonal layers |
| `--color-on-surface` | `#1a1c1b` | `#e1e3de` | Primary text |
| `--color-on-surface-variant` | `#434843` | `#c3c7c8` | Secondary text |
| `--color-outline` | `#747872` | `#8d9292` | Muted metadata and disabled states |
| `--color-outline-variant` | `#c4c8c0` | `#424849` | Hairline borders and dividers |
| `--color-primary` | `#536153` | `#bbc9cb` | Links, accents, active text |
| `--color-primary-container` | `#6b7a6b` | `#0f1c1e` | Active controls |
| `--color-on-primary-container` | `#ffffff` | `#778587` | Text on active controls |
| `--color-secondary` | `#5f5e5e` | `#bfc7d7` | Secondary accents |
| `--color-secondary-container` | `#e4e2e1` | `#3f4755` | Secondary tonal surfaces |
| `--color-tertiary` | `#5d5e59` | `#e9c349` | Editorial callouts |
| `--color-error` | `#ba1a1a` | `#ffb4ab` | Error text |
| `--color-error-container` | `#ffdad6` | `#93000a` | Error surface |

## Typography Rules

- 본문 가독성이 우선이다.
- 버튼, 카드, 사이드바 안의 텍스트는 hero scale을 쓰지 않는다.
- letter spacing은 기본값을 우선한다.
- viewport width에 따라 font-size를 직접 스케일하지 않는다.
- 홈, 글 상세, 카테고리, 아카이브, 소개 페이지는 같은 semantic font token을 사용한다. 제목은 `--font-display`, 긴 본문은 `--font-body`, 날짜/카테고리/보조 라벨은 `--font-label`을 기준으로 한다.

## Card Rules

- 카드는 반복 항목이나 글 본문 컨테이너에만 사용한다.
- 카드 안에 카드를 중첩하지 않는다.
- 카드 radius는 작게 유지한다.
- 리스트 카드 크기는 내용에 따라 크게 흔들리지 않도록 한다.

## Navigation Rules

- 홈, 카테고리, 아카이브, 소개는 항상 접근 가능해야 한다.
- 존재하지 않는 페이지로 연결하지 않는다.
- 태그 기능을 만들기 전에는 Tag 링크를 노출하지 않는다.

## Change Policy

큰 디자인 변경은 바로 구현하지 말고 먼저 다음을 문서화한다.

- 어떤 사용 흐름을 개선하는가.
- 어떤 페이지가 영향을 받는가.
- 모바일에서 어떤 제약이 있는가.
- 변경 후 어떤 화면으로 검증할 것인가.
