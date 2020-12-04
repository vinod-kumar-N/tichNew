import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountActions from '@Actions/accountActions';
import AddEditAddress from './AddEditAddress';
// import Button from '@Uilib/button';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function MyAddresses() {

  const [selectedAddressId, setSelectedAddressId] = useState(undefined);
  const [isAddEditAddressEnabled, setEditableState] = useState(false);

  useEffect( () => {
    const { getUserAddresses } = AccountActions;
    dispatch(getUserAddresses(CustomerId));
  }, [])
  const dispatch = useDispatch();
  const { CustomerId } = useSelector(
    ({ AuthReducers }) => AuthReducers.newUserInfo ? AuthReducers.newUserInfo : AuthReducers.userInfo
  );


  const { userAddresses } = useSelector(
    ({ AccountReducers }) => AccountReducers,
  );



  const handleEditAddress = (AddressId) => {
    if (AddressId) {
      setSelectedAddressId(AddressId);
    }
    setEditableState(true);
  };
  const changeEditableState = () => {
    setEditableState(false);
  };
  const userAddressesHtml = userAddresses ? (
    <Fragment>
      {userAddresses.map(
        ({
          NickName,
          AddressId,
          AddressLine1,
          AddressLine2,
          CityLong,
          PostalCodeLong,
          StateLong,
        }) => (
            <div className="col-md-4" key={AddressId}>
              <Card className="address-card">
                <Card.Body>
                  <Card.Title>{NickName}</Card.Title>
                  <Card.Text>{`${AddressLine1}, ${AddressLine2}`}</Card.Text>
                  <Card.Text>{`${CityLong}, ${PostalCodeLong}, ${StateLong}`}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <Button
                    onClick={() => handleEditAddress(AddressId)}
                    variant="outline-primary"
                  >
                    Edit
                </Button> {' '}
                  <Button
                    onClick={() => handleDeleteAddress(AddressId)}
                    variant="outline-danger"
                  >
                    Delete
                </Button>
                </Card.Footer>
              </Card>
            </div>
          ),
      )}
      <div className="col-md-12">
        <hr className="my-4" />
        <Button onClick={handleEditAddress}>Add a new address</Button>
      </div>
    </Fragment>
  ) : (
      <div className="alert alert-primary col-md-12">
        No addresses found.{' '}
        <a onClick={handleEditAddress} className="alert-link">
          Click here, to add a address
      </a>
      </div>
    );
  const addEditAddressHtml = selectedAddressId ? (
    <AddEditAddress
      selectedAddressId={selectedAddressId}
      changeEditableState={changeEditableState}
    />
  ) : (
      <AddEditAddress changeEditableState={changeEditableState} />
    );
  return (
    <div className="container">
      <div className="row">
        {isAddEditAddressEnabled ? addEditAddressHtml : userAddressesHtml}
      </div>
    </div>
  );
}
