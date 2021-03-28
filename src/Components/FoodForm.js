import React, { Component, useState, useCallback } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Col from 'react-bootstrap/Col'
const FoodForm = (props) => {

  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          onChange={props.handleAddressChange}
          placeholder="1234 Main St"
        />
        <Form.Text className="text-muted">
          Don't worry, we won't send you random pizzas.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="address2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control
          onChange={e=> props.handleAddressTwoChange(e)}
          placeholder="Apt, Suite..."
        />
        <Form.Text className="text-muted">
          Don't worry, we won't send you random pizzas.
        </Form.Text>
      </Form.Group>
      <Form.Row>
      <Form.Group as={Col} controlId="formCity">
        <Form.Label>City</Form.Label>
        <Form.Control onChange={e=> props.handleCityChange(e)} value={props.formData.city}></Form.Control>
      </Form.Group>
      <Form.Group as={Col} controlId="exampleForm.ControlSelect1">
        <Form.Label>State</Form.Label>
        <Form.Control
          onChange={(e) => props.handleStateChange(e)}
          value={props.formData.state}
          as="select"
        >
          <option value="AL">AL</option>
          <option value="AK">AK</option>
          <option value="AZ">AZ</option>
          <option value="AR">AR</option>
          <option value="CA">CA</option>
          <option value="CO">CO</option>
          <option value="CT">CT</option>
          <option value="DE">DE</option>
          <option value="DC">DC</option>
          <option value="FL">FL</option>
          <option value="GA">GA</option>
          <option value="HI">HI</option>
          <option value="ID">ID</option>
          <option value="IL">IL</option>
          <option value="IN">IN</option>
          <option value="IA">IA</option>
          <option value="KS">KS</option>
          <option value="KY">KY</option>
          <option value="LA">LA</option>
          <option value="ME">ME</option>
          <option value="MD">MD</option>
          <option value="MA">MA</option>
          <option value="MI">MI</option>
          <option value="MN">MN</option>
          <option value="MS">MS</option>
          <option value="MO">MO</option>
          <option value="MT">MT</option>
          <option value="NE">NE</option>
          <option value="NV">NV</option>
          <option value="NH">NH</option>
          <option value="NJ">NJ</option>
          <option value="NM">NM</option>
          <option value="NY">NY</option>
          <option value="NC">NC</option>
          <option value="ND">ND</option>
          <option value="OH">OH</option>
          <option value="OK">OK</option>
          <option value="OR">OR</option>
          <option value="PA">PA</option>
          <option value="RI">RI</option>
          <option value="SC">SC</option>
          <option value="SD">SD</option>
          <option value="TN">TN</option>
          <option value="TX">TX</option>
          <option value="UT">UT</option>
          <option value="VT">VT</option>
          <option value="VA">VA</option>
          <option value="WA">WA</option>
          <option value="WV">WV</option>
          <option value="WI">WI</option>
          <option value="WY">WY</option>
        </Form.Control>
      </Form.Group>
      <Form.Group as={Col} controlId="formZip">
        <Form.Label>Zip Code</Form.Label>
        <Form.Control onChange={e=> props.handleZipChange(e)} value={props.formData.zip}></Form.Control>
      </Form.Group>
      </Form.Row>
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Radius (Miles) </Form.Label>
        <Form.Control
          onChange={(e) => props.handleRadiusChange(e)}
          value={props.formData.radius}
          as="select"
        >
          <option value={1}> 1 </option>
          <option value={5}> 5 </option>
          <option value={10}> 10 </option>
          <option value={15}> 15 </option>
          <option value={20}> 20 </option>
          <option value={25}> 25 </option>
        </Form.Control>
      </Form.Group>
      
      {["checkbox"].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            name="1"
            onChange={(e) => props.handlePriceChange(e)}
            inline
            label="$"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            name="2"
            onChange={(e) => props.handlePriceChange(e)}
            inline
            label="$$"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            name="3"
            onChange={(e) => props.handlePriceChange(e, type)}
            inline
            label="$$$"
            type={type}
            id={`inline-${type}-3`}
          />
          <Form.Check
            name="4"
            onChange={(e) => props.handlePriceChange(e)}
            inline
            label="$$$$"
            type={type}
            id={`inline-${type}-4`}
          />
        </div>
      ))}
      <Button id="btn-submit" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FoodForm;
