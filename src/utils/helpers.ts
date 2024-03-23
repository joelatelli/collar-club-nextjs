export function makeid(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export function cleanSlug(slug) {
    slug = slug.replace(/^\s+|\s+$/g, '');
    slug = slug.toLowerCase();
  
    const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    const to = 'aaaaeeeeiiiioooouuuunc------';
  
    for (let i = 0, l = from.length; i < l; i++) {
      slug = slug.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
  
    slug = slug
      .normalize('NFD')
      .replace(/[^a-z0-9 -]^[\u4e00-\u9fa5]/g, '') // remove all that not are a letter, a number, and are not a chinese word
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace('-?', '') 
      .replace('?', '');
  
    return slug;
  }

    // transformer
export class DecimalColumnTransformer {
  to(data: number): number {
      return data;
  }
  from(data: string): number {
      return parseFloat(data);
  }
}