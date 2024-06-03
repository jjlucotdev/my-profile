import React, { useState } from 'react';
import {
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,MDBTabsPane,
  MDBContainer
} from 'mdb-react-ui-kit';

export default function App() {
  const [basicActive, setBasicActive] = useState('home');

  const handleBasicClick = (value) => {
    if (value === basicActive) return;

    setBasicActive(value);
  }

  return (
    <MDBContainer className="section text-center">
    <MDBRow>
      <MDBCol size={4}>
        <MDBListGroup light small>
          <MDBTabs>
            <MDBListGroupItem action active={basicActive === 'home'} noBorders className='px-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('home')}>Home</MDBTabsLink>
              </MDBTabsItem>
            </MDBListGroupItem>
            <MDBListGroupItem action active={basicActive === 'profile'} noBorders className='px-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('profile')}>Profile</MDBTabsLink>
              </MDBTabsItem>
            </MDBListGroupItem>
            <MDBListGroupItem action active={basicActive === 'messages'} noBorders className='px-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('messages')}>Messages</MDBTabsLink>
              </MDBTabsItem>
            </MDBListGroupItem>
            <MDBListGroupItem action active={basicActive === 'settings'} noBorders className='px-3'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleBasicClick('settings')}>Settings</MDBTabsLink>
              </MDBTabsItem>
            </MDBListGroupItem>
          </MDBTabs>
        </MDBListGroup>
      </MDBCol>

      <MDBCol size={8}>
        <MDBTabsContent>
          <MDBTabsPane open={basicActive === 'home'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore impedit quibusdam exercitationem
            eligendi voluptate doloribus non pariatur libero quod nobis mollitia odio dolore eos debitis iure,
            autem quisquam ullam beatae.
          </MDBTabsPane>
          <MDBTabsPane open={basicActive === 'profile'}>
            Ea eos asperiores deserunt reprehenderit voluptatem deleniti dolor iure eum consectetur commodi.
          </MDBTabsPane>
          <MDBTabsPane open={basicActive === 'messages'}>
            Et perspiciatis facilis labore natus at necessitatibus. Sequi earum qui illum reiciendis? Excepturi,
            dicta consequuntur, voluptas aspernatur, quis laboriosam exercitationem quasi officia tempore iste
            assumenda aliquam.
          </MDBTabsPane>
          <MDBTabsPane open={basicActive === 'settings'}>
            Praesentium asperiores nemo ratione quas atque excepturi odio aliquid libero, architecto aspernatur
            expedita, corrupti, rem odit quos exercitationem maxime at. Ex, eveniet rerum laborum accusamus
            delectus magnam maxime!
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBCol>
    </MDBRow>
    </MDBContainer>
  );
}