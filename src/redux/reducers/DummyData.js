import { GROUP_DATA, UPDATE_COMMENT, UPDATE_MESSAGE } from "../actions/DataType";

const initialState = {
   groups: [
      {
         id: 1,
         groupName: 'GOA Trip',
         friends: [
            "Amarendar",
            "Kalyan",
            "Sanjay",
         ],
         howSpent: [
            {
               message: 'Hotel',
               cost: 9800,
               comments: []
            },
            {
               message: 'Food',
               cost: 3500,
               comments: []
            },
            {
               message: 'Drinks',
               cost: 6500,
               comments: []
            }, {
               message: 'For Petrol',
               cost: 5200,
               comments: []
            }
         ],
         paid: [
            {
               Kalyan: 6250,
            },
            {
               Sanjay: 6250,
            }
         ]
      },

      {
         id: 2,
         groupName: 'Saturday Night',
         friends: [
            "Sanjay",
            "Kalyan",
            
         ],
         howSpent: [
            {
               message: 'For Drinks',
               cost: 852,
               comments: []
            },
            {
               message: 'For Food',
               cost: 3500,
               comments: []
            }, {
               message: 'Hotel',
               cost: 9800,
               comments: []
            }
         ],
         paid: []
      },

      {
         id: 3,
         groupName: 'New Year Party',
         friends: [
            "Sanjay",
            "Amarendar",
            "Kalyan",
            "Kd"
         ],
         howSpent: [
            {
               message: 'Driks',
               cost: 14200,
               comments: []
            },
            {
               message: 'Food',
               cost: 5000,
               comments: []
            },
            {
               message: 'For Cake',
               cost: 800,
               comments: []
            }
         ],
         paid: [
            {
               Kd: 4000,
            },
            {
               Sanjay: 4000,
            },
            {
               Amarendar: 4000,
            },
            {
               Kalyan: 4000,
            }
         ]
      },
      {
         id: 4,
         groupName: 'kusumitha Birthday Party',
         friends: [
            "Amarendar",
            "Kalyan",
            "Kalyan",
            "Sanjay",
            "kusumitha",
         ],
         howSpent: [
            {
               message: 'Decoration',
               cost: 5200,
               comments: []
            },
            {
               message: 'For Cake',
               cost: 1500,
               comments: []
            },
            {
               message: 'Drinks',
               cost: 15000,
               comments: []
            }
         ],
         paid: [
            {
               Kalyan: 3616.67
            }
         ]
      },
      {
         id: 5,
         groupName: 'Room expenses',
         friends: [
            "Amarendar",
            "Sanjay",
         ],
         howSpent: [
            {
               message: 'vegetables',
               cost: 300,
               comments: []
            },
            {
               message: 'Water Tin',
               cost: 20,
               comments: []
            }
         ],
         paid: [
            {
               Amarendar: 106.67,
            },
            {
               Sanjay: 106.67,
            }
         ]
      },

      {
         id: 6,
         groupName: 'Avatar Movie at PVR',
         friends: [
            "Kalyan",
            "Sanjay",
            "Amarendar",
         ],
         howSpent: [
            {
               message: 'Tickets',
               cost: 5200,
               comments: []
            },
            {
               message: 'Food',
               cost: 1500,
               comments: []
            }
         ],
         paid: [
            {
               Sanjay: 1675
            }
         ]
      },
   ]
}

const DummyData = (state = initialState, action) => {
   switch (action.type) {
      case GROUP_DATA:
         return {
            ...state,
            groups: {
               ...state.group,
               ...action.payload
            }
         };
      case UPDATE_MESSAGE: {
         const {
            groupName, update
         } = action.payload
         return {
            ...state,
            groups: [
               ...state.groups,
               update
            ]
         }
      }
      default:
         return state;
   }
}

export default DummyData;