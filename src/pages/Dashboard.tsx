import { User } from '@/types/models';
import { mockTasks, mockFeedback, mockReports, mockEvaluations } from '@/lib/mockData';
import TaskBoard from '@/components/TaskBoard';
import FeedbackCard from '@/components/FeedbackCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  Clock,
  TrendingUp,
  Target,
  FileText,
  Award,
  Calendar,
} from 'lucide-react';

interface DashboardProps {
  user: User;
}

export default function Dashboard({ user }: DashboardProps) {
  const totalTasks = mockTasks.length;
  const completedTasks = mockTasks.filter((t) => t.status === 'done').length;
  const inProgressTasks = mockTasks.filter((t) => t.status === 'in_progress').length;
  const completionRate = Math.round((completedTasks / totalTasks) * 100);

  const latestEvaluation = mockEvaluations[0];
  const evaluationPercentage = latestEvaluation
    ? Math.round((latestEvaluation.totalScore / latestEvaluation.maxScore) * 100)
    : 0;

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">
            Welcome back, {user.name}! 👋
          </h1>
          <p className="text-muted-foreground">
            Track your internship progress and stay on top of your tasks.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Tasks
              </CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalTasks}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {completedTasks} completed
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                In Progress
              </CardTitle>
              <Clock className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{inProgressTasks}</div>
              <p className="text-xs text-muted-foreground mt-1">Active tasks</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Completion Rate
              </CardTitle>
              <CheckCircle2 className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{completionRate}%</div>
              <Progress value={completionRate} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Performance
              </CardTitle>
              <Award className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{evaluationPercentage}%</div>
              <p className="text-xs text-muted-foreground mt-1">Latest evaluation</p>
            </CardContent>
          </Card>
        </div>

        {/* Task Board */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Task Board</h2>
              <p className="text-sm text-muted-foreground">
                Manage and track your internship tasks
              </p>
            </div>
            <Button>
              <FileText className="h-4 w-4 mr-2" />
              Add Task
            </Button>
          </div>
          
          <TaskBoard tasks={mockTasks} />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Feedback */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Recent Feedback
                </CardTitle>
                <Badge variant="secondary">{mockFeedback.length}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockFeedback.slice(0, 3).map((feedback) => (
                <FeedbackCard key={feedback.id} feedback={feedback} />
              ))}
              {mockFeedback.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-8">
                  No feedback yet
                </p>
              )}
            </CardContent>
          </Card>

          {/* Progress Reports */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Progress Reports
                </CardTitle>
                <Button size="sm">Submit Report</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockReports.map((report) => (
                <div
                  key={report.id}
                  className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm">
                      Week {report.weekNumber} Report
                    </h4>
                    <Badge variant="outline" className="capitalize">
                      {report.period}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    {report.summary}
                  </p>
                  
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">
                      Achievements:
                    </p>
                    <ul className="text-xs space-y-0.5">
                      {report.achievements.slice(0, 2).map((achievement, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-3">
                    {new Date(report.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
              
              {mockReports.length === 0 && (
                <p className="text-sm text-muted-foreground text-center py-8">
                  No reports submitted yet
                </p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Evaluation Card */}
        {latestEvaluation && (
          <Card className="border-2 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Latest Evaluation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold">
                    {latestEvaluation.totalScore}/{latestEvaluation.maxScore}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {evaluationPercentage}% Overall Score
                  </p>
                </div>
                <div className="text-right">
                  <Badge variant="default" className="text-sm px-3 py-1">
                    Excellent Progress
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">
                    {new Date(latestEvaluation.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {latestEvaluation.criteria.map((criterion) => (
                  <div
                    key={criterion.name}
                    className="p-3 rounded-lg bg-card border"
                  >
                    <p className="text-sm font-medium mb-1">{criterion.name}</p>
                    <div className="flex items-center gap-2">
                      <Progress
                        value={(criterion.score / criterion.maxScore) * 100}
                        className="h-2"
                      />
                      <span className="text-xs font-semibold whitespace-nowrap">
                        {criterion.score}/{criterion.maxScore}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {latestEvaluation.comments && (
                <div className="p-4 rounded-lg bg-card border">
                  <p className="text-sm font-medium mb-1">Mentor's Comments</p>
                  <p className="text-sm text-muted-foreground">
                    {latestEvaluation.comments}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
