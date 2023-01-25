import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { ApplicationService } from './application.service'
import { CreateApplicationDto } from './dto/create-application.dto'
import { UpdateApplicationDto } from './dto/update-application.dto'

@Controller('application')
export class ApplicationController {
    constructor(private readonly applicationService: ApplicationService) {}

    @Post('create')
    async create(@Body() createApplicationDto: CreateApplicationDto) {
        try {
            return await this.applicationService.create(createApplicationDto)
        } catch (error) {
            console.log(error)
            return {
                EC: 1, //error code
                EM: 'Error from server', //error message
            }
        }
    }

    @Get()
    findAll() {
        return this.applicationService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.applicationService.findOne(+id)
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateApplicationDto: UpdateApplicationDto,
    ) {
        return this.applicationService.update(+id, updateApplicationDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.applicationService.remove(+id)
    }
}
