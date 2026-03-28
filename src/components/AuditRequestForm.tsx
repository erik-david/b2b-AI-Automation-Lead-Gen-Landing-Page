import { useState } from 'react';
import { supabase, AuditRequest } from '../lib/supabase';
import { Button } from './Button';
import { AlertCircle, CheckCircle } from 'lucide-react';

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

    try {
      const { error } = await supabase.from('audit_requests').insert([formData]);

      if (error) throw error;

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
    } catch (error) {
      setFormState({
        status: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit request. Please try again.',
      });
    }
  };

  if (formState.status === 'success') {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 flex flex-col items-center text-center">
        <CheckCircle className="w-12 h-12 text-emerald-600 mb-4" />
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Request Received</h3>
        <p className="text-slate-600">{formState.message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" /> {errors.name}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@company.com"
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" /> {errors.email}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">
          Company Name
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company"
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-400 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" /> {errors.company}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">
          Phone Number (optional)
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(555) 000-0000"
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-200 mb-2">
          Tell us about your challenges (optional)
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="What operational challenges are you facing? What tools do you currently use?"
          rows={4}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-colors resize-none"
        />
      </div>

      {formState.status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{formState.message}</p>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        loading={formState.status === 'loading'}
        className="w-full"
      >
        Request Your Free Audit
      </Button>

      <p className="text-xs text-slate-400 text-center">
        We respect your privacy. Your information will never be shared with third parties.
      </p>
    </form>
  );
}
