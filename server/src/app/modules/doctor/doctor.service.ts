import { Doctor, UserRole } from "@prisma/client";
import prisma from "../../../shared/prisma";
import bcrypt from 'bcrypt';
import ApiError from "../../../errors/apiError";
import httpStatus from "http-status";

const create = async (payload: any): Promise<any> => {
    try {
        const data = await prisma.$transaction(async (tx) => {
            const { password, ...othersData } = payload;
            const doctor = await tx.doctor.create({
                data: othersData,
            });

            if (doctor) {
                const auth = await tx.auth.create({
                    data: {
                        email: doctor.email,
                        password: password && await bcrypt.hashSync(password, 12),
                        role: UserRole.doctor,
                        userId: doctor.id
                    },
                });
                return {
                    doctor,
                    auth,
                };
            }
        });

        return data;
    } catch (error:any) {
        throw new ApiError(httpStatus.BAD_REQUEST, error.message)
    }
}

const getAllDoctors = async (): Promise<Doctor[] | null> => {
    const result = await prisma.doctor.findMany();
    return result;
}

const getDoctor = async (id: string): Promise<Doctor | null> => {
    const result = await prisma.doctor.findUnique({
        where: {
            id: id
        }
    });
    return result;
}

const deleteDoctor = async (id: string): Promise<any> => {
    const result = await prisma.$transaction(async (tx) => {
        const patient = await tx.doctor.delete({
            where: {
                id: id
            }
        });
        await tx.auth.delete({
            where: {
                email: patient.email
            }
        })
    });
    return result;
}

const updateDoctor = async (id: string, payload: Partial<Doctor>): Promise<Doctor> => {
    const existingDoctor = await prisma.doctor.findUnique({ where: { id } });
    if (!existingDoctor) throw new ApiError(httpStatus.NOT_FOUND, "Doctor not found");

    const mergedData = { ...existingDoctor, ...payload };

    const isComplete = Boolean(
        mergedData.phone &&
        mergedData.specialization &&
        mergedData.clinicName &&
        mergedData.biography && mergedData.biography.length > 0 &&
        mergedData.price
    );

    const result = await prisma.doctor.update({
        data: { ...payload, profileComplete: isComplete },
        where: {
            id: id
        }
    })
    return result;
}

export const DoctorService = {
    create,
    updateDoctor,
    deleteDoctor,
    getAllDoctors,
    getDoctor
}