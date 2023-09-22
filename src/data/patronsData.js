
// custom dataProvider for react-admin for resource: Patron

import {
  GET_LIST,
  GET_ONE,
  CREATE,
  UPDATE,
  DELETE,
} from 'react-admin';

const apiUrl = '/api'; // Replace with your API endpoint.

const dataProvider = (type, resource, params) => {
  let url = '';
  const options = {};

  switch (type) {
    case GET_LIST:
      url = `${apiUrl}/${resource}`;
      
      return fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          // Calculate the 'total' based on the length of the 'data' array.
          const total = data.length;

          // Return the expected response format.
          return {
            data: data,
            total: total,
          };
        });
    case GET_ONE:
      url = `${apiUrl}/${resource}/${params.id}`;
      break;
    // case CREATE:
    //   url = `${apiUrl}/${resource}`;
    //   options.method = 'POST';
    //   options.body = JSON.stringify(params.data);
    //   break;
    case UPDATE:
      url = `${apiUrl}/${resource}/${params.id}`;
      options.method = 'PUT';
      options.body = JSON.stringify(params.data);
      break;
    // case DELETE:
    //   url = `${apiUrl}/${resource}/${params.id}`;
    //   options.method = 'DELETE';
    //   break;
    default:
      throw new Error(`Unsupported dataProvider type: ${type}`);
  }

  return fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      // Customize data transformation if needed.
      return {
        data: data,
      };
    });
};

export default dataProvider;
