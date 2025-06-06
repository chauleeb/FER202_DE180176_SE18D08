import React, { useState } from 'react';

const FlightBookingForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    departure: 'Hà Nội',
    arrival: 'Hà Nội',
    tripType: 'departure'
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'radio' ? value : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.fullName.trim().length < 5) {
      newErrors.fullName = 'Họ tên phải có ít nhất 5 ký tự';
    }

    if (formData.address.trim().length < 5) {
      newErrors.address = 'Địa chỉ phải có ít nhất 5 ký tự';
    }

    if (formData.departure === formData.arrival) {
      newErrors.location = 'Điểm đi và điểm đến không thể giống nhau';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const tripTypeText = formData.tripType === 'departure' ? 'Một chiều' : 'Khứ hồi';
      
      alert(`Đặt vé thành công!

Họ tên: ${formData.fullName}
Địa chỉ: ${formData.address}
Đi từ: ${formData.departure}
Đến: ${formData.arrival}
Loại vé: ${tripTypeText}`);

      // Reset form
      setFormData({
        fullName: '',
        address: '',
        departure: 'Hà Nội',
        arrival: 'Hà Nội',
        tripType: 'departure'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Form đặt vé máy bay
        </h2>
        
        <div className="space-y-4">
          {/* Họ tên */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Họ tên
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Nhập họ tên"
                className={`w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">Phải nhập ít nhất 5 ký tự</p>
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Địa chỉ */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
              Địa chỉ
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Nhập địa chỉ"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.address ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <p className="text-xs text-gray-500 mt-1">Phải nhập ít nhất 5 ký tự</p>
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>

          {/* Đi từ và Đến */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="departure" className="block text-sm font-medium text-gray-700 mb-2">
                Đi từ
              </label>
              <select
                id="departure"
                name="departure"
                value={formData.departure}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                <option value="Đà Nẵng">Đà Nẵng</option>
                <option value="Cần Thơ">Cần Thơ</option>
                <option value="Hải Phòng">Hải Phòng</option>
              </select>
            </div>
            <div>
              <label htmlFor="arrival" className="block text-sm font-medium text-gray-700 mb-2">
                Đến
              </label>
              <select
                id="arrival"
                name="arrival"
                value={formData.arrival}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Hà Nội">Hà Nội</option>
                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                <option value="Đà Nẵng">Đà Nẵng</option>
                <option value="Cần Thơ">Cần Thơ</option>
                <option value="Hải Phòng">Hải Phòng</option>
              </select>
            </div>
          </div>
          
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location}</p>
          )}

          {/* Chọn chiều đi */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Chọn chiều đi (Khứ hồi)
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="tripDeparture"
                  name="tripType"
                  value="departure"
                  checked={formData.tripType === 'departure'}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="tripDeparture" className="ml-2 text-sm text-gray-700">
                  Một chiều
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="tripReturn"
                  name="tripType"
                  value="return"
                  checked={formData.tripType === 'return'}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor="tripReturn" className="ml-2 text-sm text-gray-700">
                  Khứ hồi
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 font-medium"
          >
            Đặt vé
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightBookingForm;