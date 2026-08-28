import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  badge?: string;
  description?: string;
  icon?: React.ReactNode;
}

interface CustomSelectProps {
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string;
  placeholder?: string;
  id?: string;
  className?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  label,
  error,
  placeholder = 'Select an option',
  id = 'custom-select',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value) || options[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div className={`space-y-1.5 relative ${className}`} ref={selectRef}>
      {label && (
        <label htmlFor={id} className="block text-xs font-bold text-foreground tracking-wide">
          {label}
        </label>
      )}

      {/* Select Trigger Box */}
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-background border text-left transition-all duration-200 cursor-pointer ${
          isOpen
            ? 'border-primary ring-2 ring-primary/20 shadow-sm'
            : error
            ? 'border-red-500 hover:border-red-600'
            : 'border-border hover:border-primary/50'
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          {selectedOption?.icon && (
            <span className="text-primary shrink-0">{selectedOption.icon}</span>
          )}
          <span className="text-sm font-semibold text-foreground truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          {selectedOption?.badge && (
            <span className="hidden sm:inline-flex text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 shrink-0">
              {selectedOption.badge}
            </span>
          )}
        </div>

        <ChevronDown
          className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-primary' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute z-50 left-0 right-0 mt-1.5 bg-card border border-border rounded-2xl shadow-xl p-1.5 space-y-1 max-h-64 overflow-y-auto backdrop-blur-md animate-in fade-in zoom-in-95 duration-150"
        >
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(option.value)}
                className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? 'bg-primary/10 text-primary font-bold border border-primary/20'
                    : 'text-foreground hover:bg-muted/70 font-medium'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  {option.icon && (
                    <span className={`shrink-0 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`}>
                      {option.icon}
                    </span>
                  )}
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-semibold truncate">{option.label}</span>
                      {option.badge && (
                        <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-muted text-muted-foreground shrink-0">
                          {option.badge}
                        </span>
                      )}
                    </div>
                    {option.description && (
                      <span className="text-[11px] text-muted-foreground font-normal truncate mt-0.5">
                        {option.description}
                      </span>
                    )}
                  </div>
                </div>

                {isSelected && (
                  <Check className="w-4 h-4 text-primary shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {error && <p className="text-[11px] text-red-500 font-semibold">{error}</p>}
    </div>
  );
};
