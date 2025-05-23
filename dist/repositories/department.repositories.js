"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentRepository = void 0;
class DepartmentRepository {
    constructor(repository) {
        this.repository = repository;
    }
    create(department) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.save(department);
        });
    }
    findMany() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.find();
        });
    }
    findDeptById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findOneBy({ id });
        });
    }
    getAllEmployeeByDeptId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne({ where: { id }, relations: {
                    employee: true
                } });
        });
    }
    update(id, department) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.save(Object.assign({ id }, department)); //await this.repository.save({id,name:employee.name,email:employee.email})
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.delete(id);
        });
    }
    remove(department) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.remove(department);
        });
    }
    softremove(department) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.softRemove(department);
        });
    }
}
exports.DepartmentRepository = DepartmentRepository;
//# sourceMappingURL=department.repositories.js.map