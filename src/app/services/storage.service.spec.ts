import { StorageService } from "./storage.service";

describe('StorageService', () => {
  let service: StorageService;
  let mockLocalStorage: any;

  beforeEach(() => {
    service = new StorageService();
    mockLocalStorage = {};
    
    spyOn(localStorage, 'getItem').and.callFake(key => {
      return mockLocalStorage[key] || null;
    });
    spyOn(localStorage, 'setItem').and.callFake((key, value) => {
      mockLocalStorage[key] = value;
    });
    spyOn(localStorage, 'removeItem').and.callFake(key => {
      delete mockLocalStorage[key];
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save and retrieve data from local storage', () => {
    const data = { name: 'John', age: 30 };
    service.saveData('user', data);
    const retrievedData = service.getData('user');
    expect(retrievedData).toEqual(data);
  });

  it('should return null when retrieving non-existent data', () => {
    const retrievedData = service.getData('non_existent_key');
    expect(retrievedData).toBeNull();
  });

  it('should remove data from local storage', () => {
    const data = { name: 'Jane', age: 25 };
    service.saveData('user', data);
    service.removeData('user');
    const retrievedData = service.getData('user');
    expect(retrievedData).toBeNull();
  });
});

