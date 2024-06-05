import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className=' text-center text-white' style={{'backgroundColor': '#03045eff'}}>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='https://www.facebook.com/jjlucot.dev/'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='https://mail.google.com/mail/?view=cm&fs=1&to=jjlucot.dev@gmail.com'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
         

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/in/jason-jay-lucot-23b848207/'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/jjlucotdev'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://stackoverflow.com/users/23770732/jj-lucot'
            role='button'
          >
            <MDBIcon fab icon='stack-overflow' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='https://github.com/jjlucotdev/webportfolio1'>
          Jason Jay Lucot
        </a>
      </div>
    </MDBFooter>
  );
}