class DB {
    constructor() {
        const { createClient } = supabase;
        const supabaseUrl = "https://vizeofbxsoxvuokxuexn.supabase.co";
        const supabaseAnonKey = "sb_publishable_hk0E_WNMoBx0_PRSEsMvvw_6A5z9sc4";
        this.purchasesTable = "purchases";
        this.categoriesTable = "categories";

        this.supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
    }

    async getPurchases() {
        const { data, error } = await this.supabaseClient
            .from(this.purchasesTable)
            .select(`
            *,
            ${this.categoriesTable} (*)
        `);
        if (error) {
            return console.error(error);
        }
        return data;
    }

    async addPurchase(purchase) {
        const { data, error } = await this.supabaseClient.from(this.purchasesTable).insert({
            name: "Текст какой нибудь",
            cost: Math.round(Math.random() * 1000),
            created_at: new Date().toISOString(),
            category_id: 1,
            is_purchase: true
        });
        if (error) {
            return console.error(error);
        }
        return data;
    }
}