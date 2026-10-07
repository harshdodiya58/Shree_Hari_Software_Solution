'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginData } from '@/lib/validators';
import { cn } from '@/lib/utils';
import { AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui';

export default function LoginPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginData) => {
    setStatus('loading');
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // For demo purposes, we always error out to show the "Not a client?" flow
      setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-ink mb-2">Sign in to Portal</h1>
        <p className="text-ink-2 text-sm">Access your projects, reports, and team collaboration space.</p>
      </div>

      <div className="bg-surface border border-border rounded-[24px] p-6 md:p-8 shadow-rest">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-ink">Email Address</label>
            <input
              {...register('email')}
              id="email"
              type="email"
              className={cn(
                "w-full px-4 py-3 bg-bg-soft border rounded-[12px] text-ink text-sm outline-none transition-colors",
                errors.email ? "border-danger focus:border-danger" : "border-border focus:border-primary"
              )}
              placeholder="name@company.com"
            />
            {errors.email && <p className="text-xs text-danger flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="password" className="block text-sm font-medium text-ink">Password</label>
              <Link href="#" className="text-xs font-medium text-primary hover:underline">Forgot password?</Link>
            </div>
            <input
              {...register('password')}
              id="password"
              type="password"
              className={cn(
                "w-full px-4 py-3 bg-bg-soft border rounded-[12px] text-ink text-sm outline-none transition-colors",
                errors.password ? "border-danger focus:border-danger" : "border-border focus:border-primary"
              )}
              placeholder="••••••••"
            />
            {errors.password && <p className="text-xs text-danger flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.password.message}</p>}
          </div>

          <div className="flex items-center gap-2">
            <input
              {...register('rememberMe')}
              type="checkbox"
              id="rememberMe"
              className="w-4 h-4 rounded border-border text-primary focus:ring-primary"
            />
            <label htmlFor="rememberMe" className="text-sm text-ink-2">Remember me for 30 days</label>
          </div>

          {status === 'error' && (
            <div className="p-3 bg-danger-soft border border-danger/20 rounded-[12px] flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-danger shrink-0 mt-0.5" />
              <p className="text-xs text-danger-700">Invalid email or password. Please try again.</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className={cn(
              "w-full px-6 py-3 bg-primary text-white font-semibold rounded-[12px] transition-all",
              "hover:bg-primary-hover active:scale-[0.98]",
              "disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100 flex items-center justify-center gap-2"
            )}
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="mt-8 relative flex items-center py-2">
          <div className="flex-grow border-t border-border"></div>
          <span className="flex-shrink-0 mx-4 text-xs font-mono uppercase text-ink-3">Or continue with</span>
          <div className="flex-grow border-t border-border"></div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <button type="button" className="flex items-center justify-center gap-2 px-4 py-2.5 border border-border rounded-[12px] hover:bg-bg-soft transition-colors text-sm font-medium text-ink">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.699-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            GitHub
          </button>
          <button type="button" className="flex items-center justify-center gap-2 px-4 py-2.5 border border-border rounded-[12px] hover:bg-bg-soft transition-colors text-sm font-medium text-ink">
            <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>
        </div>
      </div>

      <div className="mt-8 text-center bg-primary-soft/50 border border-primary/20 rounded-[16px] p-4 flex flex-col items-center justify-center">
        <p className="text-sm text-ink-2 mb-2">Not a client yet?</p>
        <Button href="/contact" variant="outline" size="sm">
          Discuss Your Project
        </Button>
      </div>
    </div>
  );
}
