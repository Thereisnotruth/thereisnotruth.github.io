# HARNESS_ENGINEERING.md

이 문서는 이 블로그를 하네스 엔지니어링 연습장으로 다루기 위한 원칙이다.

## Definition

하네스 엔지니어링은 에이전트가 코드를 생성하도록 맡기는 것에서 끝나지 않는다. 에이전트가 목표를 이해하고, 현재 시스템을 관찰하고, 실패를 재현하고, 수정 후 검증할 수 있도록 리포지토리와 실행 환경을 설계하는 일이다.

## Local Goal

이 블로그의 목표는 다음 세 가지다.

- UI와 레이아웃을 자유롭게 변경할 수 있다.
- 에이전트가 변경 의도와 제약을 리포지토리 안에서 읽을 수 있다.
- 변경은 빌드, 수동 시나리오, 시각 확인, 향후 자동 테스트로 검증 가능하다.

## Principles

### Keep AGENTS.md Small

`AGENTS.md`는 백과사전이 아니라 지도다. 세부 규칙은 `ARCHITECTURE.md`와 `docs/` 아래 문서로 분리한다.

### Make Knowledge Repository Local

에이전트가 볼 수 없는 정보는 작업 중 존재하지 않는 정보와 같다. 디자인 취향, 아키텍처 결정, TDD 규칙, 품질 기준은 리포지토리 파일로 남긴다.

### Prefer Executable Checks

중요한 규칙은 문서로만 두지 않는다. 반복되는 규칙은 테스트, 린트, 빌드, 스크립트, 체크리스트 중 하나로 승격한다.

### Optimize For Agent Readability

코드는 사람만이 아니라 에이전트도 읽는다. 모듈 경계, 파일명, 데이터 흐름, 검증 명령이 예측 가능해야 한다.

### Make Feedback Loops Short

작업은 작은 단위로 나눈다. 각 단위는 다음 중 최소 하나의 검증 방법을 가져야 한다.

- `pnpm run build`
- 특정 페이지 수동 확인
- 브라우저 스크린샷 비교
- 새 테스트 또는 회귀 테스트
- 문서 체크리스트

## Harness Layers

### Documentation Harness

- `AGENTS.md`: 진입점과 필수 규칙.
- `ARCHITECTURE.md`: 코드와 데이터 흐름.
- `docs/TESTING.md`: TDD와 검증 명령.
- `docs/FRONTEND.md`: UI 작업 기준.
- `docs/DESIGN.md`: 시각적 취향과 레이아웃 방향.
- `docs/QUALITY_CHECKLIST.md`: 완료 조건.

### Execution Harness

- `pnpm run dev`: 로컬 개발 서버.
- `pnpm run build`: 프로덕션 빌드 검증.
- `pnpm run serve`: 빌드 결과 확인.

### Review Harness

작업 완료 전 다음 질문에 답한다.

- 무엇을 바꾸려 했는가?
- 변경 전 실패 기준은 무엇이었는가?
- 어떤 명령 또는 화면으로 검증했는가?
- 새 규칙을 문서나 자동화로 남겨야 하는가?

## Drift Management

에이전트는 기존 패턴을 복제한다. 나쁜 패턴도 복제되므로 정기적으로 정리한다.

- 오래된 문서와 실제 코드 차이를 줄인다.
- 반복되는 warning은 코드 또는 규칙으로 해결한다.
- UI 변경 후 스크린샷 기준을 갱신한다.
- 임시 구현은 완료 후 제거하거나 명시적으로 기술 부채에 기록한다.
