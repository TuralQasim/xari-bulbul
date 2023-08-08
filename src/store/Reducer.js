const initalState = {
  language: "AZ",
  products: [],
  categories: [],
  images: [],
  reviews: [],
  load: true,
  reviewModal: false,
  pricesFilter: [70, 320],
  Recall: [],
  favorite: [],
  basket: [],
  users: [],
  searchWord: "",
  staticWords: {
    AZ: {
      header: {
        may28: "28 may",
        genclik: "Gənclik",
        nerimanov: "Nərimanov",
        haqqinda: "Haqqında",
        teshkilatlar: "Təşkilatlar",
        catdirilma: "Çatdırılma",
        odeme: "Ödəmə",
        zemanet: "Zəmanət",
        qaytarilma: "Qaytarılma",
        blog: "Bloq",
        reyler: "Rəylər",
        elaqe: "Əlaqə",
        komek: "Kömək",
        gunler1: "Be-C 8.00-22.00",
        gunler2: "Ş-B 10.00-22.00",
        topdan: "Topdan satış",
        nomre: "+994516830063",
        searchInputPlaceholder: "Axtarış...",
        searchInputNotFound: "Məhsul tapılmadı",
        sebetBosh: "Boş",
        catalog: "Kataloq",
        home: "Ana səhifə",
      },
      footer: {
        gunler1: "Be-C 8.00-22.00",
        gunler2: "Ş-B 10.00-22.00",
        haqqinda: "Haqqında",
        teshkilatlar: "Təşkilatlar",
        catdirilma: "Çatdırılma",
        odeme: "Ödəmə",
        zemanet: "Zəmanət",
        qaytarilma: "Qaytarılma",
        blog: "Bloq",
        reyler: "Rəylər",
        elaqe: "Əlaqə",
        komek: "Kömək",
        enYeni: "Ən son yeniliklərdən xəbərdar ol!",
        mailInput: "Emaili daxil edin...",
        abune: "Abunə ol",
        unvan: "Zerife Eliyeva 23, Baku, Azerbaijan",
        place: "Emaili düzgün daxil edilməmişdir!",
      },
    },
    RU: {
      header: {
        may28: "28 мая",
        genclik: "Генджлик",
        nerimanov: "Нериманов",
        haqqinda: "О магазине",
        teshkilatlar: "Организациям",
        catdirilma: "Доставка",
        odeme: "Оплата",
        zemanet: "Гарантии",
        qaytarilma: "Возврат",
        blog: "Блог",
        reyler: "Отзывы",
        elaqe: "Контакты",
        komek: "Помощь",
        gunler1: "Пн-Пт 8.00 - 22.00",
        gunler2: "Сб- Вс 10.00 - 22.00",
        topdan: "Оптовым клиентам",
        nomre: "+994516830063",
        searchInputPlaceholder: "Найти букет...",
        searchInputNotFound: "Товаров нет",
        catalog: "Каталог",
        home: "Главная",
      },
      footer: {
        gunler1: "Пн-Пт 8.00 - 22.00",
        gunler2: "Сб- Вс 10.00 - 22.00",
        haqqinda: "О магазине",
        teshkilatlar: "Организациям",
        catdirilma: "Доставка",
        odeme: "Оплата",
        zemanet: "Гарантии",
        qaytarilma: "Возврат",
        blog: "Блог",
        reyler: "Отызывы",
        elaqe: "Контакты",
        komek: "Помощь",
        enYeni: "Будь в курсе самых лучших предложений и свежих новостей",
        mailInput: "Введите электронную почту ",
        abune: "Подписаться",
        unvan: "Zerife Eliyeva 23, Baku, Azerbaijan",
        place: "Email entered incorrectly!",
      },
    },
    EN: {
      header: {
        may28: "28 may",
        genclik: "Ganclik",
        nerimanov: "Narimanov",
        haqqinda: "About",
        teshkilatlar: "Organizations",
        catdirilma: "Delivery",
        odeme: "Pay",
        zemanet: "Guarantee",
        qaytarilma: "Refund",
        blog: "Blog",
        reyler: "Reviews",
        elaqe: "Contacts",
        komek: "Help",
        gunler1: "Mo-Fr 8.00 - 22.00",
        gunler2: "Sa-Su 10.00 - 22.00",
        topdan: "Wholesale customers",
        nomre: "+994516830063",
        searchInputPlaceholder: "Search...",
        searchInputNotFound: "Not found...",
        catalog: "Catalog",
        home: "Home",
        place: "",
      },
      footer: {
        gunler1: "Mo-Fr 8.00 - 22.00",
        gunler2: "Sa-Su 10.00 - 22.00",
        haqqinda: "О About",
        teshkilatlar: "Organizations",
        catdirilma: "Delivery",
        odeme: "Pay",
        zemanet: "Guarantee",
        qaytarilma: "Refund",
        blog: "Blog",
        reyler: "Reviews",
        elaqe: "Contacts",
        komek: "Help",
        enYeni: "Stay up to date with the best offers and the latest news",
        mailInput: "Enter email...",
        abune: "Follow",
        unvan: "Zerife Eliyeva 23, Baku, Azerbaijan",
      },
    },
  },
  dinWords: [],
};
export default function Reducer(state = initalState, action) {
  switch (action.type) {
    case "CHANGE_LANG":
      return { ...state, language: action.payload };
    case "IMAGES":
      return { ...state, images: action.payload };
    case "PRODUCTS":
      return { ...state, products: action.payload };
    case "CATEGORIES":
      return { ...state, categories: action.payload };
    case "REVIEWS":
      return { ...state, reviews: action.payload };
    case "LOAD":
      return { ...state, load: action.payload };
    case "SEARCH_WORD":
      return { ...state, searchWord: action.payload };
    case "REVIEW_MODAL":
      return { ...state, reviewModal: action.payload };
    case "SEARCH_VALUE":
      return { ...state, reviewModal: action.payload };
    case "RECALL_INFO":
      return { ...state, Recall: action.payload };
    case "USERS":
      return { ...state, users: action.payload };
    case "DINAMIC_WORDS":
      return { ...state, dinWords: action.payload };
    case "ADD_FAVOROTE":
      return { ...state, favorite: [...state.favorite, action.payload] };
    case "DELETE_FAVOROTE":
      return {
        ...state,
        favorite: [...state.favorite.filter((a) => a != action.payload)],
      };
    case "ADD_BASKET":
      return { ...state, basket: [...state.basket, action.payload] };
    case "DELETE_BASKET":
      return {
        ...state,
        basket: [...state.basket.filter((a) => a != action.payload)],
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              count: 1,
            };
          }
          return product;
        }),
      };
    case "INC_COUNT":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              count: product.count + 1,
            };
          }
          return product;
        }),
      };
    case "DEC_COUNT":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              count: product.count - 1,
            };
          }
          return product;
        }),
      };
    default:
      return state;
  }
}
