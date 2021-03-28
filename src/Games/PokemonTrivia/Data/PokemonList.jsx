let counterTry = 0;
const number = () => Math.floor(Math.random() * 898 + 1);

const getDataPokemon = async (x, dispatch, boolean, f) => {
  /*const{x,result,img,title,type,choise} = dispatch*/
  let img = {};
  let result = {};
  let title = {};
  let type = {};
  let choise = {};
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${x}`;
    const reqPokemon = await fetch(url);
    const pokemonData = await reqPokemon.json();
    const imgUrl = pokemonData["sprites"]["other"]["official-artwork"][
      "front_default"
    ]
      ? pokemonData["sprites"]["other"]["official-artwork"]["front_default"]
      : pokemonData["sprites"]["other"]["dream_world"]["front_default"];
    img = imgUrl;
    const namepoke = pokemonData.name.replace(/\W/g, " ");

    if (boolean) {
      result = namepoke;
      title = "????";
      const choises = [];
      choises.push(namepoke);
      for (let i = 0; i < 3; i += 1) {
        const url = `https://pokeapi.co/api/v2/pokemon/${number()}`;
        const reqPokemon = await fetch(url);
        const pokemonData = await reqPokemon.json();
        const namepoke = pokemonData.name.replace(/\W/g, " ");
        choises.push(namepoke);
      }
      choise = choises.sort((a, b) => a.localeCompare(b) * -1);
      dispatch({
        type: "Data",
        result: result,
        title: title,
        buttonMap: choise,
        img: img,
        bolean: boolean,
      });
    } else {
      title = namepoke;
      const types = {};
      const poketypes = pokemonData.types;
      let typeElements = "";
      for (let x in poketypes) {
        if (poketypes[x]) {
          const CurrenTypes = poketypes[x];
          typeElements = typeElements + " " + CurrenTypes.type.name;
        }
      }
      types[typeElements] = typeElements;
      result = typeElements;
      typeElements = "";
      for (let i = 0; i < 3; i += 1) {
        const url = `https://pokeapi.co/api/v2/pokemon/${number()}`;
        const reqPokemon = await fetch(url);
        const pokemonData = await reqPokemon.json();
        const poketypes = pokemonData.types;
        for (let x in poketypes) {
          if (poketypes[x]) {
            const CurrenTypes = poketypes[x];
            typeElements = typeElements + " " + CurrenTypes.type.name;
          }
        }
        if (types[typeElements]) {
          i -= 1;
        } else {
          types[typeElements] = typeElements;
          typeElements = "";
        }
      }
      choise = Object.keys(types);
      dispatch({
        type: "Data",
        result: result,
        title: title,
        buttonMap: choise,
        img: img,
        bolean: boolean,
        flip: f,
      });
    }
  } catch (error) {
    counterTry += 1;
    if (counterTry > 5) {
      await getDataPokemon(number(), result, img, title, type, choise);
    } else {
      await getDataPokemon(x, result, img, title, type, choise);
    }
  }
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Increse":
      return {
        ...state,
        counter: parseInt(state.counter) + 1,
      };
    case "flip":
      return {
        ...state,
        flip: action.flip,
      };
    case "buttonMap":
      return {
        ...state,
        buttonMap: action.buttonMap,
        coluns: action.buttonMap[0] === "Restar Game" ? 1 : state.coluns,
      };
    case "winOrLosse":
      return {
        ...state,
        winOrLosse: action.winOrLosse,
        flip: false,
        counter:
          action.winOrLosse === "Win" ? state.counter + 1 : state.counter,
        buttonMap: action.winOrLosse === "Restar" ? [] : state.buttonMap,
      };
    case "Reset":
      return {
        ...state,
        coluns: action.coluns,
        counter: action.counter,
      };
    case "Data":
      return {
        ...state,
        Result: action.result,
        img: action.img,
        title: action.title,
        buttonMap: action.buttonMap,
        flip: action.flip ? true : false,
        question: action.bolean
          ? "¿Quien es este Pokemon?"
          : "¿Que tipo es este Pokemon?",
      };

    default:
      break;
  }
};
const initialState = {
  counter: 0,
  Result: " ",
  flip: true,
  img: "",
  title: "",
  buttonMap: [],
  question: "",
  winOrLosse: 0,
  coluns: 2,
};

export { getDataPokemon, reducer, initialState };
