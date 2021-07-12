// import { CHANNEL_SELECTED } from '../actions';

// export default function(state = null, action) {

//   if (action.type === CHANNEL_SELECTED) {
//     return action.payload;
//   }
//   else {
//     return state;
//   }

// }


import { CHANNEL_SELECTED } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case CHANNEL_SELECTED: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
