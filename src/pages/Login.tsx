import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockUsers } from '@/lib/mockData';
import { User } from '@/types/models';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, UserCircle, Shield, Users } from 'lucide-react';

interface LoginProps {
  onLogin: (user: User) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<User['role'] | null>(null);

  const handleLogin = (role: User['role']) => {
    const user = mockUsers.find((u) => u.role === role);
    if (user) {
      onLogin(user);
      navigate('/dashboard');
    }
  };

  const roleCards = [
    {
      role: 'student' as const,
      title: 'Student',
      description: 'Apply for internships and track your progress',
      icon: GraduationCap,
      color: 'from-primary to-accent',
    },
    {
      role: 'mentor' as const,
      title: 'Mentor',
      description: 'Guide interns and provide feedback',
      icon: Users,
      color: 'from-accent to-success',
    },
    {
      role: 'admin' as const,
      title: 'Admin',
      description: 'Manage opportunities and evaluate interns',
      icon: Shield,
      color: 'from-success to-primary',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
      
      <div className="relative w-full max-w-4xl space-y-8">
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <GraduationCap className="h-7 w-7 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold">Welcome to InternHub</h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Select your role to access the platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roleCards.map(({ role, title, description, icon: Icon, color }) => (
            <Card
              key={role}
              className={`border-2 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                selectedRole === role ? 'border-primary shadow-lg scale-105' : 'hover:scale-105'
              }`}
              onClick={() => setSelectedRole(role)}
            >
              <CardHeader className="text-center pb-4">
                <div className={`h-16 w-16 mx-auto mb-3 rounded-full bg-gradient-to-br ${color} flex items-center justify-center`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="text-sm">
                  {description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  className="w-full"
                  variant={selectedRole === role ? 'default' : 'outline'}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLogin(role);
                  }}
                >
                  Login as {title}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-2 bg-muted/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <UserCircle className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold">Demo Access</h3>
                <p className="text-sm text-muted-foreground">
                  This is a demonstration system. Click any role above to explore the platform.
                  In production, this would be connected to a real authentication system.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
