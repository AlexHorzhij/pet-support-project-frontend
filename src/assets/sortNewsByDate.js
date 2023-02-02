
export const sortNewsByDate = (news) => [...news]?.sort((a, b) => new Date(a.date) - new Date(b.date)) 