import React, { useEffect } from 'react';
import Select from 'react-select';

/**
 * * Address Form Component
 * 
 * @param {props} customUserAddresses master data for user addresses.
 * @param {props} addressType 'SENDER' or 'RECIEVER'
 * @param {props} form prop that provide main form data.
 * @param {props} onChangeValue event that need to be updated on form fill.
 * @param {props} countryOptions master data for country dropdown
 * @param {props} onSelectChange event that need to be updated on form select change.
 */

const AddressForm = ({ userAddresses, addressType, form, onChangeValue, countryOptions, onSelectChange }) => {
    const { AddressId, FullName, Email, ContactNumber, CountryShort, StateLong, CityLong, AddressLine1, AddressLine2, PostalCodeLong, CountryLong, NickName, SaveToMyAddress } = form;
    const handleFormChanges = (e) => {
        onChangeValue(addressType, e);
    }

    let instancesCount = 0
    useEffect(() => {
        instancesCount += 1
        console.log({ instancesCount })
        return () => {
            instancesCount -= 1
            console.log({ instancesCount })
        }
    }, []);

    const senderAddressesOptions = userAddresses.filter(address => address.AddressType == addressType)
        .map((address) => {
            return {
                label: `${address.NickName} - ${address.PostalCodeLong}`,
                value: address.AddressId
            }
        });
    return (
        <form className="tihlc-std-form">
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label className="col-form-label">Your saved address</label>
                    {/* <input type="text" className="form-control location-input" value={this.state.senderAddressForm.input} onChange={this.handleChange} /> */}
                    <Select options={senderAddressesOptions} onChange={(option) => onSelectChange(addressType, option, 'AddressId')}
                        value={
                            senderAddressesOptions.find((item) => item.value == AddressId)
                        } />
                    <a href="#" className="form-anchor">Add Address</a>
                </div>
                <div className="form-group col-md-12">
                    <label className="col-form-label">Full Name</label>
                    <input type="text" className="form-control" name="FullName" value={FullName} onChange={handleFormChanges} />
                </div>
                <div className="form-group col-md-12">
                    <label className="col-form-label">Email Address</label>
                    <input type="text" className="form-control" name="Email" value={Email} onChange={handleFormChanges} />
                </div>
                <div className="form-group col-md-12">
                    <label className="col-form-label">Contact Number</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            {CountryLong &&
                                <span className="input-group-text" id="basic-addon1">
                                    ({CountryLong}) - ({countryOptions.find((item) => item.value === CountryShort)?.countryCode})
                            </span>
                            }
                        </div>
                        <input type="text" className="form-control" name="ContactNumber" value={ContactNumber} onChange={handleFormChanges} />
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <label className="col-form-label">Country</label>
                    <Select options={countryOptions}
                        value={countryOptions.find((item) => item.value === CountryShort)}
                        onChange={(option) => onSelectChange(addressType, option, 'CountryShort')} />
                </div>
                <div className="form-group col-md-6">
                    <label className="col-form-label">Pincode</label>
                    <input type="text" className="form-control" name="PostalCodeLong" value={PostalCodeLong} onChange={handleFormChanges} />
                </div>
                <div className="form-group col-md-6">
                    <label className="col-form-label">State</label>
                    <input type="text" className="form-control" name="StateLong" value={StateLong} onChange={handleFormChanges} />
                </div>
                <div className="form-group col-md-6">
                    <label className="col-form-label">City</label>
                    <input type="text" className="form-control" name="CityLong" value={CityLong} onChange={handleFormChanges} />
                </div>

                <div className="form-group col-md-12">
                    <label className="col-form-label">Address line</label>
                    <input type="text" className="form-control location-input" name="AddressLine1" value={AddressLine1} onChange={handleFormChanges} />
                </div>
                <div className="form-group col-md-12">
                    <label className="col-form-label">Address Line 2</label>
                    <input type="text" className="form-control" name="AddressLine2" value={AddressLine2} onChange={handleFormChanges} />
                </div>
                <div className="form-group col-md-12">
                    <label className="col-form-label">NickName</label>
                    <input type="text" className="form-control" name="NickName" value={NickName} onChange={handleFormChanges} />
                </div>
                <div className="form-group form-check col-md-12">
                    <input className="form-check-input" type="checkbox" name="SaveToMyAddress" checked={SaveToMyAddress} onChange={handleFormChanges} />
                    <label className="form-check-label" htmlFor="SaveToMyAddress">
                        Save to my addresses
                    </label>
                </div>
            </div>
        </form>
    );

}


export default AddressForm;