import { ADD_SKILL_ACTION, INIT_USER_STATE } from "./actions";

export default function reducer(state, action) {
  switch(action.type) {
    case ADD_SKILL_ACTION: {
      return {
        ...state,
        profile: {
          skills: [...state.profile.skills, action.payload]
        }
      }
    }
    case INIT_USER_STATE: {
      return {
        ...action.payload
      }
    }
    default: {
      return state
    }
  }
}