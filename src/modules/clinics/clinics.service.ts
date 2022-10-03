import { Injectable, Inject } from '@nestjs/common';
import { CLINIC_REPOSITORY } from 'src/core/constants';
import { User } from '../users/user.entity';
import { Clinic } from './clinics.entity';
import { ClinicDto } from './dto/clinics.dto';

@Injectable()
export class ClinicsService {
    constructor(@Inject(CLINIC_REPOSITORY)
    private readonly clinicRepository: typeof Clinic) { }

    async create(clinic: ClinicDto, userId): Promise<Clinic> {
        return await this.clinicRepository.create<Clinic>({ ...clinic, userId });
    }

    async findAll(): Promise<Clinic[]> {
        return await this.clinicRepository.findAll<Clinic>({
            include: [{ model: User, attributes: { exclude: ['password'] } }],
        });
    }

    async findOne(id): Promise<Clinic> {
        return await this.clinicRepository.findOne({
            where: { id },
            include: [{ model: User, attributes: { exclude: ['password'] } }],
        });
    }

    async delete(id, userId) {
            return await this.clinicRepository.destroy({
                where: { id, userId }
            });
    }

    async update(id, data, userId) {
        const [numberOfAffectedRows, [updatedClinic]] = await this.clinicRepository.update({ ...data }, { where: { id, userId }, returning: true });

        return { numberOfAffectedRows, updatedClinic };
    }
}
