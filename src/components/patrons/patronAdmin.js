import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from '../../data/patronsData.js';
import { List, Edit, Show } from 'react-admin';

const AdminApp = () => (
    <Admin dataProvider={dataProvider}>
      <Resource name="patrons" list={List} edit={Edit} />
    </Admin>
  );
  
  export default AdminApp;