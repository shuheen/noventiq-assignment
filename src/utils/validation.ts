const publicEmailDomains = ['gmail.com', 'outlook.com', 'yahoo.com'];
const corporateDomainRegex = /@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

const validateEmail = (email: string) => {
  if (!email) {
    return 'Email is required';
  }
  // Check if email is in a valid format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return 'Please enter a valid email address.';
  }

  // Check if email is from a corporate domain (e.g., noventiq.com)
  const domain = email.split('@')[1];
  if (publicEmailDomains.includes(domain)) {
    return 'Public email addresses are not allowed.';
  }

  // Check if email has a corporate domain format
  if (!corporateDomainRegex.test(email)) {
    return 'Only corporate email addresses are allowed.';
  }

  return ''; // No errors
};

const validatePassword = (password: string) => {
  if (!password) {
    return 'Password is required.';
  }

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(password)) {
    return 'Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character.';
  }

  return ''; // No errors
};
export { validateEmail, validatePassword };
