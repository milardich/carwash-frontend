import axios from 'axios';
import { type Station } from './station.api';

export interface Unit {
    unitId: number; 
    status: string;
}

export interface UnitInfo {
    washCycleCount: number;
    totalCoinAmount: number;
    totalWaterConsumption: number;
    totalDetergentConsumption: number;
    totalWaxConsumption: number;
    unitStatus: string;
}

enum UnitStatus {
    IN_USE,
    INACTIVE,
    AVAILABLE
}

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_CARWASH_API_BASE_URL,
});

export async function getUnit(stationId?: number, unitId?: number): Promise<Unit> {
    try {
        const { data } = await axiosClient.get(`/station/${stationId}/unit/${unitId}`);
        return data;
    } catch (error) {
        throw(error);
    }
}

export async function getUnitInfo(dateTimeFrom: string, dateTimeTo: string, stationId?: number, unitId?: number): Promise<UnitInfo>{
    const timezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
    try {
        const { data } = await axiosClient.get(`/station/${stationId}/unit/${unitId}/info`, {
            params: {
                dateTimeFrom: dateTimeFrom,
                dateTimeTo: dateTimeTo,
                timezone: timezone
            }
        });
        return data;
    } catch (error) {
        throw(error);
    }
}

export async function changeUnitStatus(stationId: number, unitId: number, unitStatus: string): Promise<Unit> {
    try {
        const { data } = await axiosClient.patch(`/station/${stationId}/unit/${unitId}/status`, {
            status: unitStatus
        });
        return data;
    } catch (error) {
        throw(error);
    }
}

export async function createUnit(stationId?: number): Promise<Station> {
    try {
        const { data } = await axiosClient.post(`/station/${stationId}/unit`);
        return data;
    } catch (error) {
        throw (error);
    }
}