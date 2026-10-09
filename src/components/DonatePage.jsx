// import React, { useState } from 'react';
// import './DonatePage.css'; // Optional custom CSS styling

// const DONATION_PRESETS = [
//   { amount: 15, impact: 'Provides warm meals for 3 children for a week.' },
//   { amount: 35, impact: 'Supplies essential school books and stationary for 2 students.' },
//   { amount: 75, impact: 'Covers emergency medical care and basic checkups for a family.' },
//   { amount: 150, impact: 'Funds a month of clean water access for an entire community.' },
// ];

// export default function DonatePage() {
//   const [selectedAmount, setSelectedAmount] = useState(35);
//   const [customAmount, setCustomAmount] = useState('');
//   const [frequency, setFrequency] = useState('one-time');
//   const [paymentMethod, setPaymentMethod] = useState('card');
//   const [submitted, setSubmitted] = useState(false);

//   // Form State
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     cardNumber: '',
//     expiry: '',
//     cvv: '',
//   });

//   const currentAmount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;

//   // Dynamically calculate impact description
//   const getImpactDescription = (amount) => {
//     if (amount <= 0) return 'Select or enter an amount to see your impact.';
//     if (amount < 25) return `Your $${amount} contribution provides basic nutrition and essential care packs.`;
//     if (amount < 60) return `Your $${amount} contribution supplies learning kits and healthcare support for families.`;
//     if (amount < 100) return `Your $${amount} contribution funds shelter improvements and medical aid.`;
//     return `Your $${amount} contribution empowers community-wide clean water and sustainability projects!`;
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePresetSelect = (amount) => {
//     setSelectedAmount(amount);
//     setCustomAmount('');
//   };

//   const handleCustomAmountChange = (e) => {
//     setCustomAmount(e.target.value);
//     setSelectedAmount(null);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (currentAmount <= 0) return;
//     setSubmitted(true);
//   };

//   return (
//     <div className="donate-container">
//       <div className="donate-card">
//         <header className="donate-header">
//           <h2>Make a Difference Today</h2>
//           <p>Your support directly transforms lives across our global programs.</p>
//         </header>

//         {submitted ? (
//           <div className="success-screen">
//             <div className="success-icon">✓</div>
//             <h3>Thank You for Your Generosity!</h3>
//             <p>
//               Your <strong>{frequency}</strong> donation of <strong>${currentAmount}</strong> has been processed.
//             </p>
//             <p className="impact-quote">"{getImpactDescription(currentAmount)}"</p>
//             <button className="reset-btn" onClick={() => setSubmitted(false)}>
//               Make Another Donation
//             </button>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="donate-form">
//             {/* Frequency Toggle */}
//             <div className="frequency-selector">
//               <button
//                 type="button"
//                 className={`freq-btn ${frequency === 'one-time' ? 'active' : ''}`}
//                 onClick={() => setFrequency('one-time')}
//               >
//                 One-Time
//               </button>
//               <button
//                 type="button"
//                 className={`freq-btn ${frequency === 'monthly' ? 'active' : ''}`}
//                 onClick={() => setFrequency('monthly')}
//               >
//                 Monthly 💖
//               </button>
//             </div>

//             {/* Amount Selection Grid */}
//             <div className="amount-section">
//               <label className="section-label">Select Amount ($)</label>
//               <div className="preset-grid">
//                 {DONATION_PRESETS.map((preset) => (
//                   <button
//                     key={preset.amount}
//                     type="button"
//                     className={`preset-btn ${selectedAmount === preset.amount ? 'selected' : ''}`}
//                     onClick={() => handlePresetSelect(preset.amount)}
//                   >
//                     ${preset.amount}
//                   </button>
//                 ))}
//               </div>

//               <div className="custom-amount-wrapper">
//                 <span className="currency-symbol">$</span>
//                 <input
//                   type="number"
//                   placeholder="Custom Amount"
//                   value={customAmount}
//                   onChange={handleCustomAmountChange}
//                   min="1"
//                   className="custom-input"
//                 />
//               </div>
//             </div>

//             {/* Live Impact Preview */}
//             <div className="impact-box">
//               <span className="impact-tag">Your Impact:</span>
//               <p>{getImpactDescription(currentAmount)}</p>
//             </div>

//             {/* Contact Details */}
//             <div className="form-group">
//               <label>Full Name</label>
//               <input
//                 type="text"
//                 name="fullName"
//                 required
//                 placeholder="Jane Doe"
//                 value={formData.fullName}
//                 onChange={handleInputChange}
//               />
//             </div>

//             <div className="form-group">
//               <label>Email Address</label>
//               <input
//                 type="email"
//                 name="email"
//                 required
//                 placeholder="jane@example.com"
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//             </div>

//             {/* Payment Method Selector */}
//             <div className="payment-method-section">
//               <label className="section-label">Payment Method</label>
//               <div className="payment-options">
//                 <label className={`pay-option ${paymentMethod === 'card' ? 'active' : ''}`}>
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="card"
//                     checked={paymentMethod === 'card'}
//                     onChange={() => setPaymentMethod('card')}
//                   />
//                   Credit / Debit Card
//                 </label>
//                 <label className={`pay-option ${paymentMethod === 'upi' ? 'active' : ''}`}>
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="upi"
//                     checked={paymentMethod === 'upi'}
//                     onChange={() => setPaymentMethod('upi')}
//                   />
//                   UPI / Wallet
//                 </label>
//               </div>
//             </div>

//             {/* Card Inputs */}
//             {paymentMethod === 'card' && (
//               <div className="card-fields">
//                 <div className="form-group">
//                   <label>Card Number</label>
//                   <input
//                     type="text"
//                     name="cardNumber"
//                     required
//                     placeholder="4532 •••• •••• 8921"
//                     maxLength="19"
//                     value={formData.cardNumber}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="form-row">
//                   <div className="form-group">
//                     <label>Expiry Date</label>
//                     <input
//                       type="text"
//                       name="expiry"
//                       required
//                       placeholder="MM/YY"
//                       maxLength="5"
//                       value={formData.expiry}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label>CVV</label>
//                     <input
//                       type="password"
//                       name="cvv"
//                       required
//                       placeholder="•••"
//                       maxLength="4"
//                       value={formData.cvv}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                 </div>
//               </div>
//             )}

//             <button type="submit" className="submit-donate-btn">
//               Donate ${currentAmount || 0} {frequency === 'monthly' ? '/ Month' : ''}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import './DonatePage.css'; // CRITICAL: Makes sure styles apply

const DONATION_PRESETS = [
  { amount: 15, impact: 'Provides warm meals for 3 children for a week.' },
  { amount: 35, impact: 'Supplies essential school books and stationary for 2 students.' },
  { amount: 75, impact: 'Covers emergency medical care and basic checkups for a family.' },
  { amount: 150, impact: 'Funds a month of clean water access for an entire community.' },
];

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(35);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const currentAmount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount;

  const getImpactDescription = (amount) => {
    if (amount <= 0) return 'Select or enter an amount to see your impact.';
    if (amount < 25) return `Your $${amount} contribution provides basic nutrition and essential care packs.`;
    if (amount < 60) return `Your $${amount} contribution supplies learning kits and healthcare support for families.`;
    if (amount < 100) return `Your $${amount} contribution funds shelter improvements and medical aid.`;
    return `Your $${amount} contribution empowers community-wide clean water and sustainability projects!`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePresetSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentAmount <= 0) return;
    setSubmitted(true);
  };

  return (
    <div className="donate-wrapper">
      <div className="donate-card-box">
        <div className="donate-header">
          <h2>Make a Difference Today</h2>
          <p>Your support directly transforms lives across our global programs.</p>
        </div>

        {submitted ? (
          <div className="success-screen">
            <div className="success-icon">✓</div>
            <h3>Thank You for Your Generosity!</h3>
            <p>
              Your <strong>{frequency}</strong> donation of <strong>${currentAmount}</strong> has been processed.
            </p>
            <p className="impact-quote">"{getImpactDescription(currentAmount)}"</p>
            <button className="reset-btn" onClick={() => setSubmitted(false)}>
              Make Another Donation
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="donate-form-grid">
            {/* Left Box: Amount & Impact */}
            <div className="form-left-box">
              <div className="frequency-toggle">
                <button
                  type="button"
                  className={`freq-pill ${frequency === 'one-time' ? 'active' : ''}`}
                  onClick={() => setFrequency('one-time')}
                >
                  One-Time
                </button>
                <button
                  type="button"
                  className={`freq-pill ${frequency === 'monthly' ? 'active' : ''}`}
                  onClick={() => setFrequency('monthly')}
                >
                  Monthly 💖
                </button>
              </div>

              <div className="amount-group">
                <label className="box-label">Select Amount ($)</label>
                <div className="presets-wrapper">
                  {DONATION_PRESETS.map((preset) => (
                    <button
                      key={preset.amount}
                      type="button"
                      className={`preset-chip ${selectedAmount === preset.amount ? 'selected' : ''}`}
                      onClick={() => handlePresetSelect(preset.amount)}
                    >
                      ${preset.amount}
                    </button>
                  ))}
                </div>

                <div className="custom-input-box">
                  <span className="currency">$</span>
                  <input
                    type="number"
                    placeholder="Custom Amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    min="1"
                  />
                </div>
              </div>

              <div className="impact-card">
                <span className="impact-badge">YOUR IMPACT</span>
                <p>{getImpactDescription(currentAmount)}</p>
              </div>
            </div>

            {/* Right Box: Details & Payment */}
            <div className="form-right-box">
              <div className="input-field">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Jane Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-field">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="payment-type-group">
                <label className="box-label">Payment Method</label>
                <div className="payment-options-grid">
                  <label className={`pay-card ${paymentMethod === 'card' ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={() => setPaymentMethod('card')}
                    />
                    Credit / Debit Card
                  </label>
                  <label className={`pay-card ${paymentMethod === 'upi' ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={() => setPaymentMethod('upi')}
                    />
                    UPI / Wallet
                  </label>
                </div>
              </div>

              {paymentMethod === 'card' && (
                <div className="card-details-box">
                  <div className="input-field">
                    <label>Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      required
                      placeholder="4532 •••• •••• 8921"
                      maxLength="19"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-row">
                    <div className="input-field">
                      <label>Expiry Date</label>
                      <input
                        type="text"
                        name="expiry"
                        required
                        placeholder="MM/YY"
                        maxLength="5"
                        value={formData.expiry}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="input-field">
                      <label>CVV</label>
                      <input
                        type="password"
                        name="cvv"
                        required
                        placeholder="•••"
                        maxLength="4"
                        value={formData.cvv}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              )}

              <button type="submit" className="donate-action-btn">
                Donate ${currentAmount || 0} {frequency === 'monthly' ? '/ Month' : ''}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}