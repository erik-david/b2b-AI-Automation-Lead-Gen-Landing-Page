import { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface AuditRequest {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message?: string;
}

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export function AuditRequestForm() {
  const [formData, setFormData] = useState<AuditRequest>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [formState, setFormState] = useState<FormState>({ status: 'idle' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormState({ status: 'loading' });

    // Simulate API call
    setTimeout(() => {
      setFormState({
        status: 'success',
        message: 'Thank you! We have received your request. Check your email for next steps.',
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });

      setTimeout(() => {
        setFormState({ status: 'idle' });
      }, 5000);
    }, 1000);
  };

  if (formState.status === 'success') {
    return (
      <div className="bg-[#0D1117] border border-[#2F81F7] rounded-[6px] p-8 flex flex-col items-center text-center">
        <CheckCircle className="w-12 h-12 text-[#2F81F7] mb-4" />
        <h3 className="text-xl font-serif text-[#E6EDF3] mb-2">Request Received</h3>
        <p className="text-[#7D8590]">{formState.message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#7D8590] uppercase tracking-wider">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-[6px] text-[#E6EDF3] placeholder-[#7D8590]/50 focus:border-[#2F81F7] focus:ring-0 focus:outline-none transition-colors"
          />
          {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#7D8590] uppercase tracking-wider">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your@company.com"
            className="w-full px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-[6px] text-[#E6EDF3] placeholder-[#7D8590]/50 focus:border-[#2F81F7] focus:ring-0 focus:outline-none transition-colors"
          />
          {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-[#7D8590] uppercase tracking-wider">
            Company
          </label>
          <input
            type="text"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="Your company"
            className="w-full px-4 py-3 bg-[#0D1117] border border-[#30363D] rounded-[6px] text-[#E6EDF3] placeholder-[#7D8590]/50 focus:border-[#2F81F7] focus:ring-0 focus:outline-none transition-colors"
          />
          {errors.company && <p className="text-xs text-red-400 mt-1">{errors.company}</p>}
        </div>
      </div>

      {formState.status === 'error' && (
        <div className="bg-red-950/20 border border-red-900/50 rounded-[6px] p-4 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
          <p className="text-sm text-red-400">{formState.message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={formState.status === 'loading'}
        className="w-full py-4 bg-[#2F81F7] text-white font-medium text-lg rounded-[6px] hover:bg-[#1F6FEB] transition-all duration-200 disabled:opacity-50"
      >
        {formState.status === 'loading' ? 'Submitting...' : 'Request Your Free Audit'}
      </button>

      <p className="text-[10px] text-[#7D8590] text-center uppercase tracking-[0.2em]">
        No pressure. Just clarity.
      </p>
    </form>
  );
}
