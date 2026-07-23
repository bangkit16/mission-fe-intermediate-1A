import { api } from "../../lib/axios";

export const getAllCourses = async () => {
    const response = await api.get("/courses");
    return response.data;
};

export const getCourseById = async (id: string) => {
    const response = await api.get(`/courses/${id}`);
    return response.data;
};