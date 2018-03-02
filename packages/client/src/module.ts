import { Map } from 'immutable';

const PATH = 'js-accounts/';
const LOGIN = `${PATH}LOGIN`;
const SET_TOKENS = `${PATH}SET_TOKENS`;
const CLEAR_TOKENS = `${PATH}CLEAR_TOKENS`;
const LOGGING_IN = `${PATH}LOGGING_IN`;
const SET_ORIGINAL_TOKENS = `${PATH}SET_ORIGINAL_TOKENS`;
const CLEAR_ORIGINAL_TOKENS = `${PATH}CLEAR_ORIGINAL_TOKENS`;
const SET_IMPERSONATED = `${PATH}SET_IMPERSONATED`;

const initialState = Map<string, any>({
  isLoading: false,
  tokens: null,
  loggingIn: false,
  originalTokens: null,
  isImpersonated: false,
});

const reducer = (state = initialState, action) => {
  const nextState = state;
  switch (action.type) {
    case LOGIN: {
      break;
    }
    case SET_TOKENS: {
      const { tokens } = action.payload;
      return state.set('tokens', Map(tokens));
    }
    case CLEAR_TOKENS: {
      state.set('originalTokens', null);
      return state.set('tokens', null);
    }
    case LOGGING_IN: {
      const { isLoggingIn } = action.payload;
      return state.set('loggingIn', isLoggingIn);
    }

    case SET_ORIGINAL_TOKENS: {
      const { tokens } = action.payload;
      return state.set('originalTokens', Map(tokens));
    }

    case CLEAR_ORIGINAL_TOKENS: {
      return state.set('originalTokens', null);
    }

    case SET_IMPERSONATED: {
      const { isImpersonated } = action.payload;
      return state.set('isImpersonated', isImpersonated);
    }

    default:
      break;
  }
  return nextState;
};

export default reducer;

export const loggingIn = isLoggingIn => ({
  type: LOGGING_IN,
  payload: {
    isLoggingIn,
  },
});

export const setTokens = tokens => ({
  type: SET_TOKENS,
  payload: {
    tokens,
  },
});

export const clearTokens = () => ({
  type: CLEAR_TOKENS,
});

export const setOriginalTokens = tokens => ({
  type: SET_ORIGINAL_TOKENS,
  payload: {
    tokens,
  },
});

export const clearOriginalTokens = () => ({
  type: CLEAR_ORIGINAL_TOKENS,
});

export const setImpersonated = isImpersonated => ({
  type: SET_IMPERSONATED,
  payload: {
    isImpersonated,
  },
});
