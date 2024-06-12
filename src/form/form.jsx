import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    showPassword: false,
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });
    validate();
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.phoneNo) newErrors.phoneNo = 'Phone number is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.panNo) newErrors.panNo = 'Pan No. is required';
    if (!formData.aadharNo) newErrors.aadharNo = 'Aadhar No. is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    setIsFormValid(validate());
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      navigate('/output', { state: { formData } });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.firstName && errors.firstName && <p className="error">{errors.firstName}</p>}
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.lastName && errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.username && errors.username && <p className="error">{errors.username}</p>}
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type={formData.showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <button type="button" onClick={() => setFormData({ ...formData, showPassword: !formData.showPassword })}>
          {formData.showPassword ? "Hide" : "Show"}
        </button>
        {touched.password && errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="form-group">
        <label>Phone No.:</label>
        <input
          type="text"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.phoneNo && errors.phoneNo && <p className="error">{errors.phoneNo}</p>}
      </div>
      <div className="form-group">
        <label>Country:</label>
        <select name="country" value={formData.country} onChange={handleChange} onBlur={handleBlur}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
        {touched.country && errors.country && <p className="error">{errors.country}</p>}
      </div>
      <div className="form-group">
        <label>City:</label>
        <select name="city" value={formData.city} onChange={handleChange} onBlur={handleBlur}>
          <option value="">Select City</option>
          <option value="Delhi">Delhi</option>
          <option value="New York">New York</option>
          <option value="London">London</option>
        </select>
        {touched.city && errors.city && <p className="error">{errors.city}</p>}
      </div>
      <div className="form-group">
        <label>Pan No.:</label>
        <input
          type="text"
          name="panNo"
          value={formData.panNo}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.panNo && errors.panNo && <p className="error">{errors.panNo}</p>}
      </div>
      <div className="form-group">
        <label>Aadhar No.:</label>
        <input
          type="text"
          name="aadharNo"
          value={formData.aadharNo}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.aadharNo && errors.aadharNo && <p className="error">{errors.aadharNo}</p>}
      </div>
      <button type="submit" disabled={!isFormValid}>Submit</button>
    </form>
  );
};

export default Form;
