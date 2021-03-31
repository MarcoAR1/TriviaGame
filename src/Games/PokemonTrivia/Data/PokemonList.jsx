let counterTry = 0;
const index = {};
const number = () => Math.floor(Math.random() * 898 + 1);
const number1Al0 = () => Math.round(Math.random());
const mesclar = (arr) => {
  const map = [];
  for (let x = 0; arr.length; x++) {
    const length = arr.length - 1;
    if (arr.length === 1) {
      map.push(arr.splice(0, 1).toString());
    } else {
      const currentNumber = Math.floor(Math.random() * length - 0);
      map.push(arr.splice(currentNumber, 1).toString());
    }
  }
  return map;
};

const getDataPokemon = async (
  dispatch,
  action = "start",
  x = number(),
  boolean = true
) => {
  const currentNumber = x;
  let img = {};
  let result = {};
  let title = {};
  let choise = {};
  if (number1Al0() > 0) {
    boolean = false;
  }

  try {
    const currentPokemonData = async (i) => {
      if (index[i]) return index[i];
      else {
        const url = `https://pokeapi.co/api/v2/pokemon/${parseInt(i)}`;
        const reqPokemon = await fetch(url);
        const pokemonData = await reqPokemon.json();
        index[i] = pokemonData;
        return pokemonData;
      }
    };
    const pokemonData = await currentPokemonData(x);
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
        const currentNumber = number();
        const pokemonData = await currentPokemonData(currentNumber);
        const namepoke = pokemonData.name.replace(/\W/g, " ");
        choises.push(namepoke);
      }
      choise = mesclar(choises);
      dispatch({
        type: action,
        result: result,
        title: title,
        buttonMap: choise,
        img: img,
        bolean: boolean,
      });
      counterTry = 0;
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
        const currentNumber = number();
        const pokemonData = await currentPokemonData(currentNumber);
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
      const typekey = Object.keys(types);
      choise = mesclar(typekey);
      dispatch({
        type: action,
        result: result,
        title: title,
        buttonMap: choise,
        img: img,
        bolean: boolean,
      });
      counterTry = 0;
    }
  } catch (error) {
    counterTry += 1;
    if (counterTry > 10 && counterTry < 20) {
      await getDataPokemon(dispatch, action, parseInt(currentNumber));
    } else if (counterTry < 10) {
      await getDataPokemon(dispatch, action, parseInt(number()));
    } else {
      return error;
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
      };
    case "start":
      return {
        ...state,
        Result: action.result,
        img: action.img,
        title: action.title,
        flip: false,
        buttonMap: action.buttonMap,
        question: action.bolean
          ? "¿Quien es este Pokemon?"
          : "¿Que tipo es este Pokemon?",
      };
    case "reset":
      return {
        ...state,
        Result: action.result,
        img: action.img,
        title: action.title,
        flip: false,
        counter: 0,
        buttonMap: action.buttonMap,
        question: action.bolean
          ? "¿Quien es este Pokemon?"
          : "¿Que tipo es este Pokemon?",
      };
    case "win":
      return {
        ...state,
        counter: parseInt(state.counter) + 1,
        Result: action.result,
        img: action.img,
        title: action.title,
        buttonMap: action.buttonMap,
        flip: true,
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
  flip: false,
  img: "",
  title: "",
  buttonMap: [],
  question: "",
};

export { getDataPokemon, reducer, initialState };
