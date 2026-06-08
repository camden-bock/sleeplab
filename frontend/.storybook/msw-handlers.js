import { http, HttpResponse } from 'msw';
export const mswHandlers = [
    http.get('*/api/me', () => {
        return HttpResponse.json({
            user_id: '1',
            email: 'user@example.com',
            first_name: 'Test',
            last_name: 'User',
        });
    }),
    http.get('*/stats/*', () => HttpResponse.json({
        overall: { adherence_pct: 0 },
        nightly: [],
        rolling_adherence: [],
        streak_current: 0,
        streak_longest: 0
    })),
    http.get('*/sessions/', () => HttpResponse.json([])),
    http.get('*/sessions/*', () => HttpResponse.json({
        id: '1',
        session_id: 'test',
        tags: [],
        therapy_score: { total: 0, grade: 'C', callout: '', components: {} },
        folder_date: '2024-01-01',
        start_datetime: '2024-01-01T00:00:00Z',
        duration_hours: 8
    })),
    http.get('*/api/*', () => HttpResponse.json({})),
    http.get('*/equipment/*', () => HttpResponse.json([])),
    http.get('*/config', () => HttpResponse.json({ display_tz: 'UTC', machine_tz: 'UTC' })),
    http.post('*', () => HttpResponse.json({})),
    http.put('*', () => HttpResponse.json({})),
    http.delete('*', () => HttpResponse.json({})),
];
