import * as ActionType from "./../constants/ActionType";

let initialState = {
    userList: [
        {
            id: 1,
            name: "Dinh Phuc Nguyen",
            username: "dpnguyen",
            email: "dpnguyen@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP"
        },
        {
            id: 2,
            name: "khai",
            username: "nguyendp",
            email: "nguyendp@gmail.com",
            phoneNumber: "1123123213",
            type: "VIP"
        }
    ],
    keyword: "",
    userEdit: null
};

const userReducer = (state = initialState, action) => {
    //Nếu như action lấy danh sách => trả state về component
    //Nếu như action là delete => trả state về component
    //Nếu edit action => trả state về component
    switch (action.type) {
        case ActionType.ON_SAVE:
            if (action.user.id) {
                //UPDATE
                let index = state.userList.findIndex(
                    user => user.id === action.user.id
                );
                if (index !== -1) {
                    let userList = [...state.userList];
                    userList[index] = action.user;
                    state.userList = userList;
                }
            } else {
                //ADD
                let user = { ...action.user };
                user.id = Math.random();
                state.userList = [...state.userList, user];
            }

            return { ...state };

        case ActionType.EDIT_USER:
            state.userEdit = action.user;
            return { ...state };

        case ActionType.DELETE:
            console.log(action.user);
            /**
             * 0. Tim vi tri
             */
            let index = state.userList.findIndex(item => item.id === action.user.id);
            if (index !== -1) {
                let userList = [...state.userList];
                userList.splice(index, 1);
                state.userList = userList;
            }
            return { ...state };
        case ActionType.FILTER:
            state.keyword = action.keyword;
            return { ...state };

        default:
            return { ...state };
    }
};

export default userReducer;
