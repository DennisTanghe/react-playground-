import React, { useState } from 'react';

import 'primeicons/primeicons.css';
 
import { Sidebar } from 'primereact/sidebar';
import {Button } from 'primereact/button';
 
import './style.css';

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>

<Sidebar visible={visible} onHide={() => setVisible(false)}>
    Content
</Sidebar>

<Button icon="pi pi-arrow-right" onClick={(e) => setVisible(true)}/>
 
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
