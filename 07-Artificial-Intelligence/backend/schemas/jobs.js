import { z } from "zod";

const jobSchema = z.object({
    titulo: z.string().min(3, { message: 'Title should be at least 3 characters' }).max(100, { message: 'Title must be less than 100 characters' }),
    empresa: z.string().min(1),
    ubicacion: z.string().min(1),
    descripcion: z.string().min(1).optional().default(''),
    data: z.object({
        technology: z.array(z.string().toLowerCase().trim()).min(1),
        modalidad: z.string().min(1),
        nivel: z.string().min(1),
    }),
    content: z.object({
        description: z.string().min(1),
        responsibilities: z.string().min(1),
        requirements: z.string().min(1),
        about: z.string().min(1),
    }),
});

export function validateJob(input){
    return jobSchema.safeParse(input);
}

export function validatePartialJob(input){
    return jobSchema.partial().safeParse(input);
}