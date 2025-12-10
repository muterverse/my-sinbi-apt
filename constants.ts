
import { Question, CharacterResult } from './types';
import { questions } from './questions';

// Import questions from TS file
export const QUESTION_POOL: Record<string, Question[]> = questions;

// Character Results Mapping
export const CHARACTERS: Record<string, CharacterResult> = {
  ESTP: {
    id: 'hari',
    name: "구하리",
    mbti: "ESTP",
    catchphrase: "내 친구 건드리면 가만 안 둬!",
    description: "용감하고 행동력이 넘치는 당신! 불의를 보면 참지 못하는 정의의 사도입니다. 생각보다 몸이 먼저 나가는 스타일이지만, 특유의 리더십으로 친구들을 이끕니다.",
    tags: ["강철심장", "의리파", "행동대장"],
    imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Hari&clothing=hoodie&hair=longHair&hairColor=brown&skinColor=light",
    bestMatch: "ISFJ",
    worstMatch: "INFJ"
  },
  ESFP: {
    id: 'shinbi',
    name: "신비",
    mbti: "ESFP",
    catchphrase: "깹깹! 내가 바로 위대한 도깨비 신비님이다!",
    description: "천진난만하고 주목받기를 좋아하는 당신! 분위기 메이커 역할을 톡톡히 해냅니다. 먹는 것과 노는 것을 제일 좋아하지만, 친구를 아끼는 마음만은 누구보다 큽니다.",
    tags: ["슈퍼인싸", "도깨비", "장난꾸러기"],
    imageUrl: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Shinbi&backgroundColor=54d7c7",
    bestMatch: "ISTJ",
    worstMatch: "INTJ"
  },
  ENTP: {
    id: 'geumbi',
    name: "금비",
    mbti: "ENTP",
    catchphrase: "내 말 좀 들어보래이~!",
    description: "아는 것도 많고 말도 잘하는 당신! 논리적이고 현실적인 조언을 잘 해줍니다. 가끔은 너무 솔직해서 팩트 폭격을 날리기도 하지만, 미워할 수 없는 매력의 소유자입니다.",
    tags: ["사투리요정", "브레인", "팩트폭격"],
    imageUrl: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Geumbi&backgroundColor=fcd34d",
    bestMatch: "INFJ",
    worstMatch: "ISFJ"
  },
  ENFP: {
    id: 'hyunwoo',
    name: "김현우",
    mbti: "ENFP",
    catchphrase: "대박! 이거 완전 미스터리 사건 아니야?",
    description: "호기심 천국! 새로운 것이라면 눈이 반짝이는 당신. 상상력이 풍부하고 리액션이 좋아 주변에 항상 친구들이 많습니다. 가끔 엉뚱한 소리를 하지만 그게 당신의 매력!",
    tags: ["정보통", "리액션왕", "호기심대장"],
    imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Hyunwoo&glasses=round&hair=shortHair&clothing=graphicShirt",
    bestMatch: "INTJ",
    worstMatch: "ISTJ"
  },
  ESTJ: {
    id: 'guidohyun',
    name: "귀도 현",
    mbti: "ESTJ",
    catchphrase: "임무를 완수하겠다.",
    description: "철저하고 계획적인 당신! 목표를 세우면 반드시 이뤄내는 강한 의지의 소유자입니다. 리더십이 있고 책임감이 강해 어디서든 든든한 존재가 되어줍니다.",
    tags: ["카리스마", "계획적", "책임감"],
    imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Guido&clothing=blazerAndShirt&facialHair=none",
    bestMatch: "ISFP",
    worstMatch: "INFP"
  },
  ESFJ: {
    id: 'mom',
    name: "유지미 (하리 엄마)",
    mbti: "ESFJ",
    catchphrase: "우리 가족 다치면 가만 안 둬!",
    description: "따뜻하고 배려심 넘치는 당신! 주변 사람들을 챙기는 것을 좋아하고 조화로운 분위기를 만듭니다. 하지만 소중한 사람이 위험해지면 누구보다 강해집니다.",
    tags: ["다정함", "가족사랑", "헌신"],
    imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Jimi&hair=longHair&clothing=collarAndSweater",
    bestMatch: "ISFP",
    worstMatch: "INTP"
  },
  ENFJ: {
    id: 'rion',
    name: "리온",
    mbti: "ENFJ",
    catchphrase: "당신을 지켜드리겠습니다.",
    description: "부드러운 카리스마를 가진 당신! 타인의 성장을 돕고 세상을 더 좋게 만들고 싶어 합니다. 친절하고 매너가 좋아 누구에게나 인기가 많은 스타일입니다.",
    tags: ["스윗가이", "정의로움", "인기남"],
    imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Rion&hair=shortHair&clothing=shirt&hairColor=blonde",
    bestMatch: "INFP",
    worstMatch: "ISTP"
  },
  ENTJ: {
    id: 'joobi',
    name: "주비",
    mbti: "ENTJ",
    catchphrase: "규칙을 지켜라 꿀!",
    description: "타고난 리더! 체계적이고 효율적인 것을 좋아합니다. 때로는 엄격해 보일 수 있지만, 그룹의 목표를 위해 누구보다 열심히 일하는 열정적인 성격입니다.",
    tags: ["콜라광", "리더십", "철두철미"],
    imageUrl: "https://api.dicebear.com/9.x/bottts-neutral/svg?seed=Joobi&backgroundColor=fbbf24",
    bestMatch: "INFP",
    worstMatch: "ISFP"
  },
  ISTJ: {
    id: 'shinbiguest',
    name: "신비아파트 관리인",
    mbti: "ISTJ",
    catchphrase: "허허, 오늘도 소란스럽구먼.",
    description: "묵묵히 자신의 일을 해내는 당신! 책임감이 강하고 현실적입니다. 튀는 것을 좋아하지 않지만, 뒤에서 묵묵히 질서를 유지하는 없어서는 안 될 존재입니다.",
    tags: ["성실함", "원칙주의", "돌부처"],
    imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Janitor&facialHair=beard&clothing=overall",
    bestMatch: "ESFP",
    worstMatch: "ENFP"
  },
  ISFJ: {
    id: 'doori',
    name: "구두리",
    mbti: "ISFJ",
    catchphrase: "누나... 나 무서워...",
    description: "마음이 여리고 따뜻한 당신! 싸움을 싫어하고 평화를 사랑합니다. 겁이 많아 보일 수 있지만, 사실은 누구보다 깊은 배려심을 가진 치유의 아이콘입니다.",
    tags: ["순둥이", "먹방요정", "배려왕"],
    imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Doori&clothing=graphicShirt&weight=100",
    bestMatch: "ESTP",
    worstMatch: "ENTP"
  },
  ISTP: {
    id: 'kanglim',
    name: "최강림",
    mbti: "ISTP",
    catchphrase: "내 앞을 막지 마라.",
    description: "말보다는 행동으로 보여주는 당신! 도구 사용에 능숙하고 위기 상황에서 침착합니다. 혼자 있는 것을 즐기며, 쿨한 매력으로 주변 사람들을 사로잡습니다.",
    tags: ["강림처사", "마이웨이", "해결사"],
    imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Kanglim&clothing=blazerAndShirt&hair=black&skinColor=pale",
    bestMatch: "ESFJ",
    worstMatch: "ENFJ"
  },
  ISFP: {
    id: 'sara',
    name: "사라",
    mbti: "ISFP",
    catchphrase: "난 그저 조용히 살고 싶을 뿐이야.",
    description: "자유로운 영혼의 소유자! 예술적 감각이 뛰어나고 감수성이 풍부합니다. 틀에 박힌 것을 싫어하고 자신의 가치관에 따라 살아가는 열정적인 사람입니다.",
    tags: ["예술가", "따뜻함", "자유인"],
    imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sara&hair=longHair&clothing=graphicShirt&hairColor=red",
    bestMatch: "ESTJ",
    worstMatch: "ENTJ"
  },
  INTJ: {
    id: 'aegis',
    name: "아이기스 대장",
    mbti: "INTJ",
    catchphrase: "모든 것은 계획대로.",
    description: "전략적이고 분석적인 당신! 전체적인 그림을 보는 통찰력이 있습니다. 감정에 휘둘리지 않고 냉철하게 판단하여 목표를 달성하는 완벽주의자 성향이 있습니다.",
    tags: ["전략가", "냉철함", "독립적"],
    imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Aegis&clothing=blazer&glasses=kurt",
    bestMatch: "ENFP",
    worstMatch: "ESFP"
  },
  INTP: {
    id: 'gaeun',
    name: "이가은",
    mbti: "INTP",
    catchphrase: "책에서 봤어. 이건 아마...",
    description: "지적 호기심이 넘치는 당신! 조용해 보이지만 머릿속은 언제나 새로운 생각으로 가득 차 있습니다. 논리적으로 분석하는 것을 좋아하고, 혼자만의 시간을 소중히 여깁니다.",
    tags: ["뇌섹녀", "차분함", "관찰자"],
    imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Gaeun&hair=longHair&clothing=shirt&hairColor=black",
    bestMatch: "ENTJ",
    worstMatch: "ESFJ"
  },
  INFJ: {
    id: 'ian',
    name: "이안",
    mbti: "INFJ",
    catchphrase: "기다릴게, 영원히.",
    description: "신비롭고 통찰력 있는 당신! 겉으로는 조용해 보이지만 내면은 단단한 신념으로 가득 차 있습니다. 타인의 감정을 잘 이해하고 깊이 있는 관계를 맺는 것을 선호합니다.",
    tags: ["뱀파이어", "순정파", "통찰력"],
    imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Ian&hair=shortHair&clothing=blazerAndShirt&skinColor=pale",
    bestMatch: "ENTP",
    worstMatch: "ESTP"
  },
  INFP: {
    id: 'goodghost',
    name: "착한 귀신",
    mbti: "INFP",
    catchphrase: "나를 잊지 말아줘...",
    description: "순수하고 낭만적인 당신! 자신만의 세계가 확고하고 이상적인 것을 꿈꿉니다. 마음이 여리고 상처를 잘 받지만, 그만큼 타인을 깊이 이해하고 위로할 수 있는 능력이 있습니다.",
    tags: ["몽상가", "치유", "감수성"],
    imageUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Ghost&skinColor=pale&clothing=graphicShirt&topOpacity=50",
    bestMatch: "ENFJ",
    worstMatch: "ESTJ"
  }
};
