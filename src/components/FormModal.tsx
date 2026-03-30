import { X } from 'lucide-react';
import { AuditRequestForm } from './AuditRequestForm';

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FormModal({ isOpen, onClose }: FormModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
        onClick={onClose}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-[#161B22] border border-[#30363D] rounded-[6px] shadow-2xl max-w-md w-full pointer-events-auto animate-scale-up"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-[#161B22] border-b border-[#30363D] flex items-center justify-between p-6">
            <h2 className="text-2xl font-serif text-[#E6EDF3]">
              Request Your Audit
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#1C2128] rounded-[6px] transition-colors text-[#7D8590] hover:text-[#E6EDF3]"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 max-h-[calc(100vh-200px)] overflow-y-auto">
            <AuditRequestForm />
          </div>
        </div>
      </div>
    </>
  );
}
