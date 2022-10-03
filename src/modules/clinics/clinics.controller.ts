import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request } from '@nestjs/common';
import { Clinic as ClinicEntity } from './clinics.entity';
import { ClinicsService } from './clinics.service';

@Controller('clinics')
export class ClinicsController {
    constructor(private readonly clinicService: ClinicsService) { }

    @Get()
    async findAll() {
        /* get all clinics in the database */
        return await this.clinicService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<ClinicEntity> { 
        /* find the clinic with id */
        const clinic = await this.clinicService.findOne(id);

        /* if the clinic doesn't exist in db, thr0w 404 */
        if (!clinic) {
            throw new NotFoundException('This Clinic doesn\'t exist');
        }
        /* if clinic exist, return clinic */
        return clinic;
    }

    
}
