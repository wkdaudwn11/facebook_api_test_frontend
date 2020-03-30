import axios from "axios";

const GET_REPORTING_DATA_PENDING =
  "facebook_reporting/GET_REPORTING_DATA_PENDING";
const GET_REPORTING_DATA_SUCCESS =
  "facebook_reporting/GET_REPORTING_DATA_SUCCESS";
const GET_REPORTING_DATA_FAILURE =
  "facebook_reporting/GET_REPORTING_DATA_FAILURE";
const GET_REPORTING_DATA_CLEAR = "facebook_reporting/GET_REPORTING_DATA_CLEAR";

// 리포팅 데이터 가져오는 함수
export const getReporting = requestData => {
  return dispatch => {
    dispatch({ type: GET_REPORTING_DATA_PENDING });

    const url = `http://localhost:4000/api/v1/facebook/reporting`;
    axios
      .post(url, requestData)
      .then(response => {
        dispatch({
          type: GET_REPORTING_DATA_SUCCESS,
          payload: response
        });
      })
      .catch(error => {
        dispatch({
          type: GET_REPORTING_DATA_FAILURE,
          payload: error
        });
      });
  };
};

// state 초기화 함수
export const clear = () => {
  return dispatch => {
    dispatch({ type: GET_REPORTING_DATA_CLEAR });
  };
};

const initialState = {
  pending: false,
  error: false,
  response: {
    data: []
  }
};

const reporting = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPORTING_DATA_PENDING:
      return {
        ...state,
        pending: true
      };
    case GET_REPORTING_DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        error: false,
        response: action.payload
      };
    case GET_REPORTING_DATA_FAILURE:
      return {
        ...state,
        pending: false,
        error: true,
        response: {
          data: []
        }
      };
    case GET_REPORTING_DATA_CLEAR:
      return {
        ...state,
        pending: false,
        error: true,
        response: {
          data: []
        }
      };
    default:
      return state;
  }
};

export default reporting;
