import { TestBed } from '@angular/core/testing';
import { ListingsService } from './listings.service';
describe('ListingsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ListingsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=listings.service.spec.js.map