
import { Question } from './types';

export const questions: Record<string, Question[]> = {
  "EI": [
    {
      "id": 101,
      "dimension": "EI",
      "text": "학교에서 귀신 소동이 일어났어! 친구들이 막 모여있네?",
      "options": [
        { "text": "얘들아 무슨 일이야?! (군중 속으로 파고든다)", "value": "E" },
        { "text": "무슨 일이지...? (뒤에서 조용히 상황을 지켜본다)", "value": "I" }
      ]
    },
    {
      "id": 102,
      "dimension": "EI",
      "text": "주말에 신비아파트 친구들이 다 같이 놀자고 한다!",
      "options": [
        { "text": "완전 좋아! 당장 나갈 준비 시작!", "value": "E" },
        { "text": "아... 이번 주말은 집에서 쉬고 싶은데...", "value": "I" }
      ]
    },
    {
      "id": 103,
      "dimension": "EI",
      "text": "전학 온 친구가 혼자 앉아있다. 나의 행동은?",
      "options": [
        { "text": "안녕? 난 구하리야! (먼저 말을 건다)", "value": "E" },
        { "text": "말을 걸까 말까... (타이밍을 잰다)", "value": "I" }
      ]
    },
    {
      "id": 104,
      "dimension": "EI",
      "text": "고스트볼을 잃어버렸어! 어떡하지?",
      "options": [
        { "text": "야! 내 고스트볼 본 사람 있어?! (동네방네 물어본다)", "value": "E" },
        { "text": "마지막으로 둔 곳이 어디더라... (기억을 더듬는다)", "value": "I" }
      ]
    },
    {
      "id": 105,
      "dimension": "EI",
      "text": "친구 생일 파티에 초대받았다!",
      "options": [
        { "text": "오늘의 주인공은 나야 나! 분위기를 주도한다.", "value": "E" },
        { "text": "축하해주고 맛있는 거 먹으면서 조용히 즐긴다.", "value": "I" }
      ]
    }
  ],
  "SN": [
    {
      "id": 201,
      "dimension": "SN",
      "text": "귀신을 퇴치할 작전을 짜야 해!",
      "options": [
        { "text": "일단 눈에 보이는 약점부터 공격하자!", "value": "S" },
        { "text": "저 귀신에게 숨겨진 사연이 있지 않을까?", "value": "N" }
      ]
    },
    {
      "id": 202,
      "dimension": "SN",
      "text": "신비가 새로운 요술을 보여줬다!",
      "options": [
        { "text": "우와! 방망이에서 빛이 났어!", "value": "S" },
        { "text": "저 요술은 어떤 원리로 작동하는 걸까?", "value": "N" }
      ]
    },
    {
      "id": 203,
      "dimension": "SN",
      "text": "지하국대적을 물리치러 가는 길을 설명할 때?",
      "options": [
        { "text": "직진해서 두 번째 골목에서 오른쪽으로 꺾어.", "value": "S" },
        { "text": "저기 음산한 기운이 느껴지는 쪽으로 가면 돼!", "value": "N" }
      ]
    },
    {
      "id": 204,
      "dimension": "SN",
      "text": "강림이가 무언가 고민하는 것 같다.",
      "options": [
        { "text": "표정이 안 좋네. 무슨 일 있나?", "value": "S" },
        { "text": "혹시 또 흑화하는 건 아니겠지? (상상의 나래)", "value": "N" }
      ]
    },
    {
      "id": 205,
      "dimension": "SN",
      "text": "떡볶이를 만들 때 나는?",
      "options": [
        { "text": "레시피에 적힌 정량대로 넣는다.", "value": "S" },
        { "text": "이거 넣으면 더 맛있을 것 같은데? 감으로 넣는다.", "value": "N" }
      ]
    }
  ],
  "TF": [
    {
      "id": 301,
      "dimension": "TF",
      "text": "현우가 귀신 때문에 무서워서 울고 있다.",
      "options": [
        { "text": "울지 마. 이 부적이 있으면 안전해. (해결책)", "value": "T" },
        { "text": "많이 무서웠구나... 내가 지켜줄게. (공감)", "value": "F" }
      ]
    },
    {
      "id": 302,
      "dimension": "TF",
      "text": "친구가 엉뚱한 귀신 이야기를 한다.",
      "options": [
        { "text": "야, 그건 말이 안 되잖아. (팩트 체크)", "value": "T" },
        { "text": "진짜? 우와 대박이다! (리액션)", "value": "F" }
      ]
    },
    {
      "id": 303,
      "dimension": "TF",
      "text": "두리가 넘어져서 무릎이 까졌다.",
      "options": [
        { "text": "빨리 보건실 가서 소독하자.", "value": "T" },
        { "text": "괜찮아? 많이 아프지? ㅠㅠ", "value": "F" }
      ]
    },
    {
      "id": 304,
      "dimension": "TF",
      "text": "귀신을 물리치고 나서 든 생각은?",
      "options": [
        { "text": "이번 작전은 아주 성공적이었어.", "value": "T" },
        { "text": "귀신도 이제 편안해졌겠지? 다행이다.", "value": "F" }
      ]
    },
    {
      "id": 305,
      "dimension": "TF",
      "text": "친구가 나한테 화를 낸다.",
      "options": [
        { "text": "내가 뭘 잘못했지? 이유를 분석한다.", "value": "T" },
        { "text": "나한테 화내니까 너무 속상하다...", "value": "F" }
      ]
    }
  ],
  "JP": [
    {
      "id": 401,
      "dimension": "JP",
      "text": "방학 숙제가 산더미처럼 쌓였다!",
      "options": [
        { "text": "계획표를 짜서 오늘부터 차근차근 한다.", "value": "J" },
        { "text": "일단 놀고! 숙제는 개학 전날의 나에게 맡긴다.", "value": "P" }
      ]
    },
    {
      "id": 402,
      "dimension": "JP",
      "text": "귀신을 잡으러 갈 때 준비는?",
      "options": [
        { "text": "부적, 고스트볼, 비상약까지 완벽하게 챙긴다.", "value": "J" },
        { "text": "일단 고스트볼만 있으면 되지! 가자!", "value": "P" }
      ]
    },
    {
      "id": 403,
      "dimension": "JP",
      "text": "친구들과 놀러 가기로 했다.",
      "options": [
        { "text": "몇 시에 어디서 뭐 할지 미리 정한다.", "value": "J" },
        { "text": "일단 만나서 하고 싶은 거 하자!", "value": "P" }
      ]
    },
    {
      "id": 404,
      "dimension": "JP",
      "text": "갑자기 귀신이 튀어나왔다!",
      "options": [
        { "text": "예상치 못한 상황이라 당황스럽다. (계획 파괴)", "value": "J" },
        { "text": "오호, 이 녀석 봐라? 일단 덤벼! (융통성)", "value": "P" }
      ]
    },
    {
      "id": 405,
      "dimension": "JP",
      "text": "방 청소를 한다면?",
      "options": [
        { "text": "날 잡고 구석구석 깨끗하게 정리한다.", "value": "J" },
        { "text": "지저분한 것만 대충 침대 밑으로 밀어 넣는다.", "value": "P" }
      ]
    }
  ]
};
